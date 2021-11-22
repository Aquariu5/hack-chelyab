import cl from '../../styles/Left.module.css'
import { useState } from 'react';
import { now_time } from '../../utils/now';

const Logo = (props) => {
    let [state, setState] = useState('');
    setTimeout(() => {
        setState(now_time())
    },1000);
    //setState(prev => prev.change != props.change ? props.change : '')
    return <div className={cl.Logo}>
        Данное меню можно скрыть кнопкой выше
    </div>
}

export default Logo