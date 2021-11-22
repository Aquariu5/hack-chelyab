
import Table from './Table';
import {base} from './base.js';
import cl from '../../styles/Info.module.css'
import { keys } from './keys';
const Keys = (props) => {
    let keysarr = keys.map(el => <li>Поле {el.from} ссылается на {el.to}</li>)
    return <div className={cl.Keys}>
        <p>Внешние ключи базы данных</p>
        {keysarr}
    </div>
}

export default Keys