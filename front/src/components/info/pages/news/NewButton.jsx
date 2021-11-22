import cl from '../../../../styles/UI-modules.module.css'
const NewButton = (props) => {
    return(
            <button {...props} className={cl.MusicButton}>
                {props.title}
            </button>
    )
}

export default NewButton