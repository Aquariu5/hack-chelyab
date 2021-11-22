
import Table from './Table';
import {base} from './base.js';
import cl from '../../styles/Info.module.css'

const DB = (props) => {
    let db = base.map(tab => {
        return (
            <Table name={tab.name} fields={tab.fields}/>
        )
    });

    let sorteddb = [];

    for (let i = +props.start; i < +props.end; ++i)
    {
        sorteddb.push(db[i]);
    } 

    return <div className={cl.DB}>
        {sorteddb}
    </div>
}

export default DB