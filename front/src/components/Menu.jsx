import { useState } from 'react';
import '../styles/Menu.css';
import MenuButton from './ui-components/MenuButton';
import LeftButton from './ui-components/LeftButton';
import {useDispatch } from 'react-redux';
import {menu} from './models/menu.js';
import { useHistory } from 'react-router-dom';

const Menu = (props) => {
    const [state, setState] = useState(1);
    let arr = menu;
    let displayMenu = '';
    const dispath = useDispatch();
    
    const history = useHistory();
    console.log('history', history);
    const ChangePage = (name) => {
        /*dispath({type: "SET_PAGE", payload: name.split(":")[0]});*/
        console.log('new page', name.split(":")[1]);
        history.push('/' + name.split(":")[1]);
    }
    arr = arr.map(el => <MenuButton onClick={() => ChangePage(el)}  name={el.split(':')[0]}/>);

    return <div className="Menu">
                <LeftButton  name={'Cкрыть меню'}/>
                {arr}
            </div>
}

export default Menu
