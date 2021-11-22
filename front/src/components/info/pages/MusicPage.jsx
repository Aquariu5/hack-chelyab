import { useSelector} from 'react-redux';
import Header from '../Header';
import cl from '../../../styles/Info.module.css';
import MusicButton from '../../ui-components/MusicButton';
import {useSound} from 'use-sound';
import { musicPack, setRandomMusic } from '../../sounds/music.js';
import { useEffect, useState } from 'react';
import Alert from '../../ui-components/Alert';

const MusicPage = (props) => {
    let info = "Если ты здесь, значит ты не смог разобраться в простых вещах. Тебе следует отсюда убраться";
    let phone = "Телефон для справок:";
    let number = "+7-917-742-61-63";

    const [musicIdx, setMusic] = useState(1);
    const [disabled, setDisable] = useState(false);
    const [alert, setAlert] = useState(true);
    const [text, setText] = useState('Музыка изменена')
    // useEffect(() => {
    //     //setMusic(newidx);
    //     stop();
    //     play();
    // }, [musicIdx])      

    let [play, {stop, isPlaying}] = useSound(musicPack[musicIdx]);

    useEffect(() => {
        console.log('Поменялся флажок');
        setDisable(false);
    },[isPlaying]);
    const StopMusic =  () => {
        //if (isPlaying) {
            console.log('остановлена из-за флажка музыка', musicIdx)
            stop();
        //}
        // else {
        //     console.log('не остановлена из-за флажка музыка', musicIdx)
        // }
    }
    const StartMusic =  () => {
       play();
       setDisable(true);
    }

    const switchMusic =  () => {
         StopMusic();
         const newidx = setRandomMusic();
        setMusic(newidx);
        setDisable(false)
        setAlert(false);
        setTimeout(() => setAlert(true), 2000);
        // console.log('установлена музыка с id', newidx);
        // console.log('запущена музыка с id', newidx);
    }
    return (
            <div style={{'background-color': 'seagreen'}}>
                <Header name="Музыка"/>
                <div className={cl.Help}>
                    <p>Здесь можно слушать случайную музыку, клавиша |> запускает случайную музыку, правая клавиша меняет текущую музыку</p>
                    <MusicButton disabled={disabled} name="|>" onClick={StartMusic}/>
                        <MusicButton name="Изменить музыку" text="He"  onClick={switchMusic}/>
                        <Alert disabled={alert} text={text}/>
                    
                </div>
            </div>


    );
}

export default MusicPage
