import cl from '../styles/Auth.module.css'
import Input from './ui-components/Input'
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from './ui-components/AuthButton'
import { useHistory } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { checkUser } from '../utils/checkUser'
const  Auth = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector(state => state.authReducer.auth);
    const [login, setLogin] = useState('')
    const [password, setPass] = useState('')
    const [wrong, setWrong] = useState(cl.WrongNone)
    const enter = () => {
        
        if (checkUser(login, password)) {
            dispatch({type: "SET_AUTH", payload: !auth});
            localStorage.setItem('auth', 'true');
            if (login == 'user')
                history.push('/forma')
            else if (login == 'admin')
                history.push('/operator')
        }
        else {
            setWrong(cl.Wrong);
            setTimeout(_ => setWrong(cl.WrongNone), 2000);
        }
    }
    return <div className={cl.Auth}>
            <Input name="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
            <Input name="Пароль" value={password} onChange={(e) => setPass(e.target.value)} />
            <AuthButton onClick={enter} name="Войти" />
            <div className={wrong}>Неверно, get out of the way</div>
           </div>
}

export default Auth