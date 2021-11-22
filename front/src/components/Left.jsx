import cl from '../styles/Left.module.css'
import { useSelector} from 'react-redux'
import Calendar from './left/Calendar';
import DoDembelya from './left/DoDembelya';
import Logo from './left/Logo';
import LogOut from './left/LogOut';
const Left = (props) => {
    const display = useSelector((state) => state.displayReducer.display);
    console.log('Leftdisplay', display);
    let style = display ? cl.Left : cl.disable;
    return <div {...props} className={style}>
        <Calendar/>
        <DoDembelya/>
        <Logo/>
        <LogOut/>
        <div></div>
    </div>
}

export default Left