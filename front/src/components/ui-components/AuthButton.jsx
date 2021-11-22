import cl from '../../styles/UI-modules.module.css'

const AuthButton = (props) => {
    return(
            <button {...props} className={cl.AuthButton}>
                {props.name}
            </button>
    )
}

export default AuthButton