//import express from 'express'
const express = require('express');
const { copyFileSync } = require('fs');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express()
const bodyParser = require('body-parser');

const port = 5000;
app.use(cors())
app.use(bodyParser.json());
app.get('/', (req,res) => {
    console.log(req.body);
    console.log('p')
});



app.get('/base', (req,res) => {
    let obj = fs.readFileSync('./reestr.csv').toString();
    let arr = obj.split('\n');
    let js = {base: []};
    for (let ar of arr) {
        let cells = ar.trim().replace('\t', '').split('|');
        console.log('cells', cells);
        if (!(cells.length == 0 || (cells.length == 1 && cells[0] == '')))
            js.base.push(cells);
    }
    return  res.json(js);
    
});

// app.get('/add', (req, res) => {
//     let desc = req.query.desc;
//     let cat = req.query.cat;
//     let catnum = req.query.catnum;
//     let undercat = req.query.undercat;
//     let undercatnum = req.query.undercatnum;
//     let id = Math.round(Math.random() * (100500 - 0));
//     let str = `${id}|${desc}|${cat}|${catnum}|${undercat}|${undercatnum}|100%` + '\n';
//     fs.appendFileSync('./reestr.csv', str);
//     return res.send('OK')
// })

app.post('/add', (req, res) => {
        console.log('req', req.body);
        let body = req.body;
        let id = Math.round(Math.random() * (100500 - 0));
        let str = `${id}|${body.desc}|${body.catnum}|${body.cat}|${body.undercatnum}|${body.undercat}|100%` + '\n';
        fs.appendFileSync('./reestr.csv', str);
        let buf = JSON.parse(fs.readFileSync('./buffer.json').toString());
        let substr = `|${body.desc}|${body.catnum}|${body.cat}|${body.undercatnum}|${body.undercat}|`;
        console.log('buf.files', buf.files);
        buf.files = buf.files.filter(el => !el.file.includes(substr));
        console.log(buf, JSON.stringify(buf, null, 2));
        fs.writeFileSync('./buffer.json', JSON.stringify(buf, null, 2));
        return res.send('OK')
    })

app.get('/init', (req, res) => {
    // let str = fs.readFileSync('./base.csv').toString();
    // while (str.includes('\t')) {
    //     str = str.replace('\t', "|");
    // }
    //fs.writeFileSync('./newBody.csv', str);
    let js = {cats: [], undercats: []};
    let str = fs.readFileSync('./newBody.csv').toString().split('\n');
    //console.log('str', str);
    while (str.includes('\t')) {
             str = str.replace(`\t`, "");
    }
    str = str.filter(el=> el != '');
    for (let st of str) {
        let arr = st.split("|"); // arr[0] - код, arr[1] - название
        arr = arr.filter(el => el != '');
        if (arr[0].includes('.') && js.undercats.findIndex(el => el.split("|")[0] == arr[1]) == -1) { // если подкатегория и в подкатегориях названия еще нет
            js.undercats.push(arr[1] + "|" + arr[0]);
        }
        else if (!arr[0].includes('.')) {
            //if (js.cats.findIndex(el => el.split("|")[0] == arr[1] == -1))
                js.cats.push(arr[1] + "|" + arr[0]);
        }
    }
    
    return res.json(js);
});

app.get('/delete', (req, res) => {
    let country = req.query.country;
    let name = req.query.name;
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    obj = obj.countries;
    console.log('obj', obj);
    if (country && name) {
        for (let count of obj) {
            if (count.name == country) {
                console.log('beforeadd', count);
                //count.to = [...count.to, name];
                count.to = count.to.filter(el => el != name);
                console.log('afteradd', count);
            }
        }
    }
    fs.writeFileSync('./countriesDB.json', JSON.stringify({countries: obj}, null, 10));
    return res.json(obj);
})

app.get('/back', (req, res) => {
    let id = req.query.id;
    fs.appendFileSync('./bads.txt', id + '\n');
    let read = fs.readFileSync('./bads.txt').toString().split('\n');
    read = read.filter(el => el != '');
    let period = 30; // sec

    let buf = JSON.parse(fs.readFileSync('./buffer.json').toString());
    buf.files = buf.files.filter(el => el.id != id);
    //console.log(buf, JSON.stringify(buf, null, 2));
    fs.writeFileSync('./buffer.json', JSON.stringify(buf, null, 2));

    return res.send('OK')


    setTimeout(_ => {
        read = read.filter(el => el != id);
        fs.writeFileSync('./bads.txt', '');
        for (let r of read) {
            
            fs.appendFileSync('./bads.txt', r + '\n');
        }
    }, period * 1000);
    return res.json({id: id});
})

app.get('/getbacks', (req, res) => {
    let ids= fs.readFileSync('./bads.txt').toString().split('\n');
    ids = ids.filter(el => el != '');
    return res.json({bads: ids});
})

app.post('/buffer', (req, res) => {
    let body = req.body;
    let id = req.query.id;
    let old = [];
    try {
        old = JSON.parse(fs.readFileSync('./buffer.json').toString());
    }
    catch(e) {
        console.log(e.message);
    }
    old.files.push({file: body.file, id: id});
    fs.writeFileSync('./buffer.json', JSON.stringify(old, null, 2));
    
    return res.send('OK');
});



app.get('/getBuffer', (req, res) => {
    let files = JSON.parse(fs.readFileSync('./buffer.json').toString());
    let k = 0;

    res.json(files);
    // for (let file of files.files) {
    //     fs.writeFileSync(`./buffer${k++}.csv`, file);
    // }

});

app.get('/image', (req, res) => {
    let name = req.query.name;
    //let img = fs.readFileSync(`./bpla/${name}.jpg`);
    return res.sendFile(path.resolve(`./bpla/${name}.jpg`));

})

app.listen(port, console.log(`Работает на ${port}`));
