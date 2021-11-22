import cl from '../../styles/Info.module.css'
import { useSelector, useDispatch } from 'react-redux'
import MenuButton from '../ui-components/MenuButton';
import AuthButton from '../ui-components/AuthButton';
const Header = ({name, btnName, onClick}) => {
    //const display = useSelector((state) => state.displayReducer.display);
    //let style = display ? cl.Header : cl.HeaderFull;
    let style = cl.HeaderFull;
    return <div className={style}>

        {name}
        <AuthButton name={btnName} onClick={onClick}/>
    </div>
}

export default Header