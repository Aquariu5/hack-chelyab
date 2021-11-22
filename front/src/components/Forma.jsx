import '../styles/Hello.css'
import Input from './ui-components/Input'
import Select from './ui-components/Select'
//import { cities } from './models/cities'
import useSound from 'use-sound'
import { useEffect, useState } from 'react'
import InputWithSelect from './ui-components/InputWithSelect'
import MenuButton from './ui-components/MenuButton'
import M from 'minimatch'
import axios from 'axios'
import cl from '../styles/Auth.module.css'
import Header from './info/Header'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { computeHeadingLevel } from '@testing-library/react'
const Forma = (props) => {

    const dispatch = useDispatch();
    const host = 'http://localhost:5000';

    const [category, setCategory] = useState(''); // для текстового поля категории (название)
    const [categoryNum, setCategoryNum] = useState(''); // для текстового поля категории (коды)

    const [cities, setCities] = useState([]); //  кэтс (без двоеточния)
    const [fulls, setFulls] = useState([]); // кэтс (названия)
    const [semifulls, setSemiFulls] = useState([]); // кэтс (код названия)

    const [undercities, setunderCities] = useState([]);  //  андеркэтс (с двоеточнием)
    const [underfulls, setunderFulls] = useState([]);   //  андеркэтс (названия)
    const [undersemifulls, setunderSemiFulls] = useState([]); // андеркэтс (коды названий)

    const [undercategory, setunderCategory] = useState(''); // для текстового поля подкатегории (название)
    const [undercategoryNum, setunderCategoryNum] = useState(''); // для текстового поля подкатегории (коды)

    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(true);
    const history = useHistory();
    const [success, setSuccess] = useState(cl.WrongNone);
    const [buffer, setBuffer] = useState(''); // buffer для записи в buffer.json

    const [init, setInit] = useState(false);

    const [loaddis, setLoaddis] = useState(true); // disable  кнопки "Отправить на сервер"

    const [notation, setNotation] = useState('');

    const [bads, setBads] = useState([]);

    useEffect(async () => {
        let res = (await axios.get(host + '/init')).data;
        setInit(true);
        //console.log('res,cats', res.cats);

        let res2 = (await axios.get(host + '/getbacks')).data.bads;
        setBads(res2);
        /*Инит категорий*/
        setCities(res.cats);
        setFulls(res.cats.map(el => el.split("|")[0]));
        setSemiFulls(res.cats.map(el => el.split("|")[1]));

        /*Инит подкатегорий*/
        setunderCities(res.undercats);
        setunderFulls(res.undercats.map(el => el.split("|")[0]));
        setunderSemiFulls(res.undercats.map(el => el.split("|")[1]));

        //console.log('cities', cities);

        // проверка что коды заполнены
        console.log('description', description.length);
        if (semifulls.findIndex(el => el == categoryNum) != 1 && undersemifulls.findIndex(el => el == undercategoryNum) != -1 && description.length > 5) { 
            setDisabled(false);
        }
    }, [categoryNum, undercategoryNum, description])
    const onChange = (e, Changer) => {
        Changer(e.target.value);
            
            /*для категорий*/
            let idxForFull = cities.findIndex(dic => dic.split(":")[0] == category);
            let idxForSemi = cities.findIndex(dic => dic.split(":")[1] == categoryNum);
            if (idxForFull != -1) { //  т.е. менялся фулл
                setCategoryNum(semifulls[idxForFull])
            }
            else if (idxForSemi != -1) {//  т.е. менялся dp
                setCategory(fulls[idxForSemi])
            }

            /*для подкатегорий */
            idxForFull = undercities.findIndex(dic => dic.split(":")[0] == undercategory);
            idxForSemi = undercities.findIndex(dic => dic.split(":")[1] == undercategoryNum);
            if (idxForFull != -1) { //  т.е. менялся фулл
                setunderCategoryNum(undersemifulls[idxForFull])
            }
            else if (idxForSemi != -1) {//  т.е. менялся dp
                setunderCategory(underfulls[idxForSemi])
            }
        
    }

    const send =  async () => {
        // let body = `/add?desc=${description}&cat=${category}&catnum=${categoryNum}&undercat=${undercategory}&undercatnum${undercategoryNum}`;
        // await axios.post()
        // let res = await axios.get(host + body);

        let body = {
            desc: description,
            cat: category,
            catnum: categoryNum,
            undercat: undercategory,
            undercatnum: undercategoryNum
        }
        console.log('body', body);
        let config = {
            headers:
            {
                "Content-type": "application/json"
            }
        };
        let res = await axios.post(host + '/add',
            body,
            config
        );

        setNotation('УСПЕХ!');
        setSuccess(cl.Wrong);
        console.log('успех!')
        setTimeout(_ => setSuccess(cl.WrongNone), 2000);
    }

    const goto = () => {
        dispatch({type: "SET_AUTH", payload: false});
        history.push('/auth');
    }

    const load = async () => {
        let body = {
                file: buffer
            }
        let config = {
            headers:
            {
                "Content-type": "application/json"
            }
        };
        let id = Math.round(Math.random() * 100500);
        let res = await axios.post(host + `/buffer?id=${id}`,
            body,
            config
        );
        console.log('res', res);
        console.log('fewfewfewgfewge')
        setBuffer('');

        setNotation(`Заявка №${id} отправлена!`);
        setLoaddis(true);
        setSuccess(cl.Wrong);
        setTimeout(_ => setSuccess(cl.WrongNone), 2000);


    }
    const handleChangeFile = (file) => {
        let fileData = new FileReader();
        console.log('file', file);
        //fileData.onloadend = handleFile;
        fileData.readAsText(file);

        fileData.onload = async function() {
            setBuffer(fileData.result);
            setLoaddis(false);
            // let body = {
            //     file: [fileData.result]
            // }
            // let config = {
            //     headers:
            //     {
            //         "Content-type": "application/json"
            //     }
            // };
            // let res = await axios.post(host + '/buffer',
            //     body,
            //     config
            // );
        }
        //console.log('tres', fileData.result);
        }
    return <div className={cl.Forma}>
            <Header name="Форма заявки" btnName="Выйти" onClick={goto}/>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Input name="Описание" value={description} onChange={e => setDescription(e.target.value)}/>
            
            <div>
                <input type="file" style={{fontSize: '16px',backgroundColor: 'yellow', height: '50px'}} onChange={e => handleChangeFile(e.target.files[0])}/>
                <MenuButton disabled={loaddis} name="Загрузить на сервер" onClick={load}/>
            </div>
            <div>
                Отклоненные заявки
                {
                    bads.map(el => <p>Заявка №{el}</p>)
                }
            </div>

            </div>

            <div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30vw'}}>
                    {/*full*/}<InputWithSelect
                    options={fulls}
                    anotherOptions={semifulls}
                    onChange={e => onChange(e, setCategory, setCategoryNum)}
                    value={category}
                    setValue={setCategory}
                    setAnotherValue={setCategoryNum}
                    name="Категория"
                    />
                    {/*dp*/}<InputWithSelect
                    options={semifulls}
                    anotherOptions={fulls}
                    onChange={e => onChange(e, setCategoryNum, setCategory)}
                    value={categoryNum}
                    setValue={setCategoryNum}
                    setAnotherValue={setCategory}
                    name="ДП1"/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30vw'}}>
                    {/*full*/}<InputWithSelect
                    options={underfulls}
                    anotherOptions={undersemifulls}
                    onChange={e => onChange(e, setunderCategory, setunderCategoryNum)}
                    value={undercategory}
                    setValue={setunderCategory}
                    setAnotherValue={setunderCategoryNum}
                    name="Подкатегория"
                    />
                    {/*dp*/}<InputWithSelect
                    options={undersemifulls}
                    filteredOptions={undersemifulls.filter(el => el.includes(categoryNum))}
                    anotherOptions={underfulls}
                    onChange={e => onChange(e, setunderCategoryNum, setunderCategory)}
                    value={undercategoryNum}
                    setValue={setunderCategoryNum}
                    setAnotherValue={setunderCategory}
                    name="ДП2"/>
                </div>
                
            </div>
            <MenuButton disabled={disabled} name="Отправить" onClick={send} />
            <div className={success}>{notation}</div>
    </div>
}

export default Forma