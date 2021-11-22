import cl from '../../styles/Left.module.css'
import { useState } from 'react';
import { now_time } from '../../utils/now';
import AuthButton from '../ui-components/AuthButton';
import { useSelector, useDispatch } from 'react-redux';
const LogOut = (props) => {
    let [state, setState] = useState('');

    //setState(prev => prev.change != props.change ? props.change : '')
    const auth = useSelector(state => state.authReducer.auth);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch({type: "SET_AUTH", payload: false});
        //localStorage.setItem('auth', 'false');
        localStorage.removeItem('auth');
    }
    return (
        <div style={{textAlign: 'center'}}>
            <AuthButton name="Выйти" style={{width: 'auto'}} onClick={logOut}/>
        </div>
    )
}

export default LogOut