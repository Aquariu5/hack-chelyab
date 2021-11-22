import cl from '../../styles/UI-modules.module.css'

const InputButton = (props) => {
    return(
            <button {...props} className={cl.InputButton}>
                {props.name}
            </button>
    )
}

export default InputButton