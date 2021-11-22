import cl from '../../styles/Left.module.css'
import { useState } from 'react';
import { now_time } from '../../utils/now';

const Calendar = (props) => {
    let [state, setState] = useState('');
    setTimeout(() => {
        setState(now_time())
    },1000);
    //setState(prev => prev.change != props.change ? props.change : '')
    return <div className={cl.Calendar}>
        <p>Сейчас у нас:</p>
        {state ? state : "Ждите..."}
    </div>
}

export default Calendar