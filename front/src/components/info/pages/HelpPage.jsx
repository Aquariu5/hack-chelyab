import { useSelector} from 'react-redux';
import Header from '../Header';
import cl from '../../../styles/Info.module.css';
const HelpPage = (props) => {

    let info = "Круглосуточная помощь для особо одаренных";
    let phone = "Телефон для справок:";
    let number = "+7-917-742-61-63";
    
    return (
        <div style={{'background-color': 'seagreen'}}>
            <Header name="Помощь"/>
        <div className={cl.Help}>
            <p>{info}</p>
            <p><span style={{'color': 'red'}}>{phone}</span> {number}</p>
        </div>

    </div>
    );
}

export default HelpPage
