import { useSelector } from 'react-redux';
import Header from '../Header';
import cl from '../../../styles/Info.module.css';
import { countries } from '../../dataBase/countries';
import { useState } from 'react/cjs/react.development';
import MenuButton from '../../ui-components/MenuButton';
import Input from '../../ui-components/Input';
import Select from '../../ui-components/Select';
import Image from '../../ui-components/Image';
import fs from 'fs';
import { useEffect } from 'react';
import axios from 'axios';
import { constants } from 'buffer';
import smoke from './logo.svg'
import BaseForm from '../../ui-components/BaseForm';
//const fetch = require('node-fetch');

const Countries = (props) => {

    //let arr = countries;
    // let jsx = '';
    // for (let el of arr)
    // {
    //     let fields = el.to;
    //     jsx += <p>{el.name}</p>
    //     for (let fi of fields)
    //         jsx += <li>{fi}</li>
    // }
    console.log('smoke', smoke);
    
    let init = []
    const [body, setBody] = useState(init);
    const [str, setStr] = useState({ country: 'Россия', name: '' });
    const [isload, setLoad] = useState(false);
    const [countNames, setCountNames] = useState([]);
    const [arr, setArr] = useState([]);
    const [countries, setCountries] = useState({});
    const [name, setName] = useState('');
    const [visible, setVisible] = useState(false);

    useEffect(async () => {
        setLoad(false);
        let fetchCounts;
        fetchCounts = await axios.get('http://localhost:5000/countries');
        fetchCounts = fetchCounts.data.countries;
        setCountries(fetchCounts);
        setArr(fetchCounts.map(el => {
            return (<div>
                <p>{el.name}</p>
                {
                    el.to.map(name => <li onMouseOver={() => showPic(true, name)} onMouseOut={() => showPic(false, name)}>{name}</li>)
                }
            </div>);
        }));
        setCountNames(fetchCounts.map(el => el.name));
        setLoad(true);
    }, []);

    //console.log(jsx)                 {
    //                 countNames.map(el => <option>{el}</option>)
    //                }
    const showPic = (flag, name) => {
        console.log('name', name);
        setName(`http://localhost:5000/image?name=${name}`);
        setVisible(flag);
        
    }
    const add = async () => {
        setBody(prev => [...prev, { country: str.country, name: str.name }]);
        let fetchCounts = await axios.get(`http://localhost:5000/add?country=${str.country}&name=${str.name}`);
        fetchCounts = fetchCounts.data;
        setCountries(fetchCounts);
        setArr(fetchCounts.map(el => {
            return (<div>
                <p>{el.name}</p>
                {
                    el.to.map(name => <li onMouseOver={() => showPic(true, name)} onMouseOut={() => showPic(false, name)}>{name}</li>)
                }
            </div>);
        }));
        // setCountries(prev => {
        //     for (let count of prev) {
        //         if (count.name == str.country) {
        //             console.log('beforeadd', count);
        //             count.to = [...count.to, str.name];
        //             console.log('afteradd', count);
        //         }
        //     }
        //     return prev;
        // })
        //setBody(prev => [...prev, <tr><td>{str.country}</td><td>{str.name}</td></tr>]);
    }

    const deleteById = async (name) => {
        setBody(prev => prev.filter(el => el.name != name));

        let fetchCounts = await axios.get(`http://localhost:5000/delete?country=${str.country}&name=${str.name}`);
        fetchCounts = fetchCounts.data;
        setCountries(fetchCounts);
        setArr(fetchCounts.map(el => {
            return (<div>
                <p>{el.name}</p>
                {
                    el.to.map(name => <li onMouseOver={() => showPic(true, name)} onMouseOut={() => showPic(false, name)}>{name}</li>)
                }
            </div>);
        }));
        // setCountries(prev => {
        // console.log('delete name', name);
        // setBody(prev => prev.filter(el => {
        //     console.log('el', el);
        //     return !String(el).includes(name);
        // }
        //     ));
    }

    const setCountry = (e) => {
        setStr(prev => {
            return { ...prev, country: e.target.value };
        })
    }

    const setNameFunc = (e) => {
        setStr(prev => {
            return { ...prev, name: e.target.value };
        })
    }

    const getImage = async (name) => {
        console.log('infunc');
         let img = (await axios.get(`http://localhost:5000/image?name=${name}`)).data;
         
         console.log('img', img);
         return img;
    }
    return (
        isload ?
            <div style={{ background: 'seagreen'}}>
                <Header name="Страны лидеры по производству БПЛА" />
                <BaseForm 
                    onChangeInput={setNameFunc}
                    onChangeSelect={setCountry}
                    options={countNames}
                    add={add}
                    deleteById={() => deleteById(str.name)}
                />


                {/* <table>
                    <header>Страны</header>
                    <body>
                        {
                            body.map(el => {
                                return (
                                    <tr>
                                        <td>
                                            {el.country}
                                        </td>
                                        <td>
                                            {el.name}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </body>
                </table> */}
                <div className={cl.Countries}>
                {arr}
                </div>
                <Image image={name} visible={visible}/>
            </div>
            :
            <div>
                Падажжи
            </div>
    );
}

export default Countries
