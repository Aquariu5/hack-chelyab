import { useSelector} from 'react-redux'
import DB from '../../dataBase/DataBase';
import Header from '../Header';

const NoticePage = (props) => {
    return (
    <div>
        <Header name="База данных беспилотных летательных аппаратов (исправление замечаний)"/>
        <DB start="6" end="11"/>
    </div>
    );
}

export default NoticePage
