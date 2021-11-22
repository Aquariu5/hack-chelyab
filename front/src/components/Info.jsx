import cl from '../styles/Info.module.css'
import { useSelector} from 'react-redux'
import DB from './dataBase/DataBase';
import {base} from './dataBase/base.js'
import Header from './info/Header';
import DataBasePage from './info/pages/DataBasePage';
import HelpPage from './info/pages/HelpPage';
import ContactsPage from './info/pages/ContactsPage';
import MusicPage from './info/pages/MusicPage';
import { useState } from 'react';
import NoticePage from './info/pages/NoticePage';
import AboutPage from './info/pages/AboutPage';
import Countries from './info/pages/Countries';
const Info = (props) => {
    const display = useSelector((state) => state.displayReducer.display);
    const page = useSelector(state => state.pageReducer.page)
    let style = display ? cl.Info : cl.full;
    //const [curPage, setPage] = useState('Главная')
    let currPage = () => {
        console.log('Входная страница', page);
        console.log(page == 'Помощь');
        switch(page) {
            // case 'Главная':
            //     console.log('Отрисуем главную')
            //     return <DataBasePage/>
            // case 'Помощь':
            //     console.log('Отрисуем помощь')
            //     return <HelpPage/>
            // case 'Контакты':
            //     return <ContactsPage/>
            // case 'Музыка':
            //     return <MusicPage/>
            // case 'Замечания':
            //     return <NoticePage/>
            // case 'Об авторе':
            //     return <AboutPage/>
            // case 'Страны':
            //     return <Countries/>   
            default:
                console.log('Я хз что делать', page)
        }
    }
    console.log('curPage', page);
    return (
        <div className={style}>
            {currPage()}
        </div>

    )
}

export default Info