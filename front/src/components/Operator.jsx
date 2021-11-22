import '../styles/Hello.css'
import fs from 'fs'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import cl from '../styles/UI-modules.module.css';
import cla from '../styles/Auth.module.css'
import Header from './info/Header';
import MenuButton from './ui-components/MenuButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from './ui-components/Table';
import DialogWindow from './ui-components/DialogWindow';
const Operator = (props) => {
    const host = 'http://localhost:5000';

    const [body, setBody] = useState([]);
    const [head, setHead] = useState([]);

    const [dialogbody, setdialogBody] = useState([]);
    const [dialoghead, setdialogHead] = useState([]);

    const history = useHistory();
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [links, setLinks] = useState([]);
    useEffect(async () => {
        let res  = (await axios.get(`${host}/base`)).data.base;
        let another = res.filter(el => res.indexOf(el) != 0);
        let liks = (await axios.get(`${host}/getBuffer`)).data.files;
        setLinks(liks);
        console.log('another', another);
        setBody(another);
        console.log('tablehead', res[0]);
        setHead(res[0])
    }, []);

    const goto = () => {
        dispatch({type: "SET_AUTH", payload: false});
        history.push('/auth');
    }

    const showDocs = async () => {
        setVisible(true);
    }

    const addInTable = async (newbody) => {
        console.log('oldbody', body);
        console.log('new body', newbody);
        let itogbody = body;
        itogbody.push(...newbody);
        console.log('itogbody', itogbody);
        setBody(itogbody);
        let res;
        for (let newb of newbody) {
            let body = {
                desc: newb[1],
                cat: newb[3],
                catnum: newb[2],
                undercat: newb[5],
                undercatnum: newb[4]
            }
            console.log('body', body);
            let config = {
                headers:
                {
                    "Content-type": "application/json"
                }
            };
            res = await axios.post(host + '/add',
                body,
                config
            );
        }
        let liks = (await axios.get(`${host}/getBuffer`)).data.files;
        setLinks(liks);
    }

    const sendBack = async (id) => {
        let res = await axios.get(host + `/back?id=${id}`);
        let liks = (await axios.get(`${host}/getBuffer`)).data.files;
        setLinks(liks);
    }

    return <div className={cla.Operator}>
        <Header name="Диспетчерская" btnName="Выйти" onClick={goto}/>
        <MenuButton name="На согласовании" onClick={showDocs}/>
        <Table name="База данных системной модуляции (БДСМ)" head={head} body={body}/>
        <DialogWindow
            name="Заявки"
            tableName="База данных системной модуляции (БДСМ)"
            visible = {visible}
            setVisible = {setVisible}
            body={dialogbody}
            head={dialoghead}
            setBody={setdialogBody}
            setHead={setdialogHead}
            addInTable = {addInTable}
            sendBack = {sendBack}
            links={links}
        />
    </div>
}

export default Operator