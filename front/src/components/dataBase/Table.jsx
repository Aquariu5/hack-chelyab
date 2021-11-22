
import cl from '../../styles/Info.module.css'
const Table = (props) => {
    let fields = props.fields;
    fields = fields.map(el => {
        return (
            <div>
                <p>{el}</p>
                <hr/>
            </div>
        );
    });
    return <div className={cl.Table}>
        <h3>{props.name}</h3>
        <hr/>
         {fields}
    </div>
}

export default Table