import cl from '../../styles/UI-modules.module.css'

const CloseButton = (props) => {
    return(
            <button {...props} className={cl.CloseButton}>
                {props.name}
            </button>
    )
}

export default CloseButton