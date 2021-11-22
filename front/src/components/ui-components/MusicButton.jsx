import cl from '../../styles/UI-modules.module.css'

const MusicButton = (props) => {
    return(
            <button {...props} className={cl.MusicButton}>
                {props.name}
            </button>
    )
}

export default MusicButton