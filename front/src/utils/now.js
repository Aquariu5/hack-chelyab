export const now_time = () => {
    const date = new Date();
    let y = date.getFullYear();
    let M = date.getMonth();
    let d = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds();

    if (M < 10)
        M = '0' + M;
    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m;
    if (s < 10)
        s = '0' + s;
    if (d < 10)
        d = '0' + d;    
    return `${y}-${M}-${d} ${h}:${m}:${s}`;
}