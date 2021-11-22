import cl from '../../styles/Left.module.css'
import { useEffect, useState } from 'react';
import { now_time } from '../../utils/now';

const DoDembelya = (props) => {
    let [state, setState] = useState('');
    let [end, setEnd] = useState('2022-07-08');
    const calc = () => {
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0)
        now.setMilliseconds(0)
        
        //let end = new Date('2022-07-08');
        console.log('end', end);
        let endDate = new Date(end)
        console.log(endDate - now);
        setState( ((endDate - now)/1000/60/60/24).toFixed(0))
    }
    useEffect(() => {
        calc()
    }, [end]);
    //setState(prev => prev.change != props.change ? props.change : '')
    return <div className={cl.Calendar}>
        <p>Крайний день:</p>
        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)}/>
        <p>До дембеля:</p>
        {state ? state : "Ждите..."} дней

    </div>
}

export default DoDembelya