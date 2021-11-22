import '../styles/Main.css'
import Left from './Left';
import Info from './Info';
import { useState } from 'react';

const Main = (props) => {
    let [state, setState] = useState('');
    
    //setState(prev => prev.change != props.change ? props.change : '')
    return <div className="Main">
        <Left/>
        <Info/>
    </div>
}

export default Main