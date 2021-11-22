import cl from '../../styles/UI-modules.module.css'

const LinkButton = (props) => {
    return(
            <button {...props} className={cl.LinkButton}>
                {props.name}
            </button>
    )
}

export default LinkButton