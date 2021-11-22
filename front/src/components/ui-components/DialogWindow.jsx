import React, {useEffect, useState} from 'react'
import cl from '../../styles/UI-modules.module.css'
import CloseButton from './CloseButton';
import LinkButton from './LinkButton';
import MenuButton from './MenuButton';
import Table from './Table';
function DialogWindow({name, visible, setVisible, setBody, setHead, tableName, body, head, links, addInTable, sendBack}) {

    const [style, setStyle] = useState(cl.DialogOff)
    const [visibleTable, setVisibleTable] = useState(cl.NotImage)
    const [id, setId] = useState('');
    useEffect(() => {
        visible ? setStyle(cl.Dialog) : setStyle(cl.DialogOff);
    }, [visible]);

    const onClose = () => {
        setVisible(false);
        setVisibleTable(cl.NotImage);
    }
    const showTable = (link) => {
        
        // let res  = (await axios.get(`${host}/base`)).data.base;
        let id = link.id;
        console.log('link', link);
        link = link.file.split('\n');
        link = link.filter(el => el != '');

        link = link.map(str => str.split("|"));
        // for (let lin of link) {
        //     lin = lin.split('|');
        // }
        let another = link.filter(el => link.indexOf(el) != 0);

        console.log('modalhead', link[0]);
        // let liks = (await axios.get(`${host}/getBuffer`)).data.files;
        // setLinks(liks);
        // console.log('another', another);
        setBody(another);
        setHead(link[0]);
        setVisibleTable('')
        setId(id)
    }

    // const sendBack =() => {

    // }

    // const addInTable = () => {

    // }

    const add = (body) => {
        onClose();
        addInTable(body);
    }
    
    const back = (id) => {
        onClose();
        sendBack(id)
    }
	return (
		<div className={style}>
			<div className={cl.DialogBar}>
                <div>{name}</div>
                <CloseButton name='X' onClick={onClose}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    links.map(link => {
                        return (
                            <LinkButton name={`Заявка №${link.id}`} onClick={() => showTable(link)}/>
                        )
                    })
                }
                </div>
                <div className={visibleTable}>
                    <Table name={tableName} head={head} body={body} modal/>
                    <div>
                        <LinkButton name="Добавить" onClick={() => add(body)}/>
                        <LinkButton name="На доработку" onClick={() => back(id)}/>
                    </div>
                </div>

            </div>
            
		</div>

	);
}

export default DialogWindow;