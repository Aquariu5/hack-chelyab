import cl from '../../styles/UI-modules.module.css'

const MenuButton = (props) => {
    return(
            <button {...props} className={cl.MenuButton}>
                {props.name}
            </button>
    )
}

export default MenuButton