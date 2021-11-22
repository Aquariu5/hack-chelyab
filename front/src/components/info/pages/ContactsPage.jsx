
import { useSelector} from 'react-redux';
import Header from '../Header';
import cl from '../../../styles/Info.module.css';
const ContactsPage = (props) => {

    let info = "Если ты здесь, значит ты не смог разобраться в простых вещах. Тебе следует отсюда убраться";
    let phone = "Телефон для справок:";
    let number = "+7-917-742-61-63";
    
    return (
        <div style={{'background-color': 'seagreen'}}>
            <Header name="Контакты"/>
            <div className={cl.Help}>
                <p><span style={{'color': 'red'}}>{phone}</span> {number}</p>
                <p>Торжественное награждение личного состава Военного инновационного технополиса "ЭРА" по результатам международного военно-технического форума АРМИЯ-2021</p>
            </div>
        </div>
    );
}

export default ContactsPage
