import cl from '../../styles/UI-modules.module.css'

const Alert = (props) => {
    let style = props.disabled ? cl.AlertOff : cl.Alert;
    return(
        <div className={style}>
            {props.text}
        </div>
    )
}
export default Alert