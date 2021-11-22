import { useSelector} from 'react-redux';
import Header from '../Header';
import cl from '../../../styles/Info.module.css';
import { about } from '../someText';
const AboutPage = (props) => {
    let name = <span style={{color: 'blue'}}>Aquarius</span>;
    let place = <span style={{color: 'red'}}>ВИТ "ЭРА"</span>;
    return (
        <div style={{'background-color': 'seagreen'}}>
            <Header name="Об авторе"/>
            <div className={cl.Help}>
            
                <p>{about(name, place)}</p>
                <h3>Проекты:</h3>
                <li>Бот в телеграме</li>
                <li>Торговый робот для работы с криптовалютной биржей</li>
                <hr/>
                <h3>Планы:</h3>
                <li>Научиться играть как можно больше песен</li>
                <li>Научиться по максимуму играть в настольный теннис</li>
                <li>Увеличить мышечную массу до 75 кг</li>
                <li>Стабильно подтягиваться 25 раз</li>
                <li>Знать в совершенстве React</li>
            </div>
        </div>
    );
}

export default AboutPage
