import '../../../../styles/News.css'
import Header from '../../Header';
import { news } from '../../../models/news';
import NewPage from './NewPage';
import NewButton from './NewButton';
import { useHistory } from 'react-router-dom';
const NewsPage = (props) => {
    let newsarr = news;
    const history = useHistory();
    const showNew =(page) => {
        history.push('/news/' + page.id)
    }
    newsarr = newsarr.map(page => <NewButton title={page.title} onClick={() => showNew(page)}/>);
    return <div style={{'background-color': 'seagreen'}}>
                <Header name="Новости"/>
                <div className="News">
                
                {newsarr}
                </div>
            </div>


}

export default NewsPage