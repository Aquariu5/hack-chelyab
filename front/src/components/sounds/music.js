import s1 from './1.mp3';
import s2 from './2.mp3';
import s3 from './3.mp3';
import s4 from './4.mp3';

export const musicPack = [s1,s2,s3,s4];

export const setRandomMusic = () => {
    const val = Math.random();
    let count = musicPack.length;
    for (let i = 1; i <= count; ++i) {
        let step = 1 / count; // 0.25
        if (i * step - step <= val && i * step >= val) {
            console.log('Возвращен новый результат', i - 1)
            return i - 1;
        }
    }
}