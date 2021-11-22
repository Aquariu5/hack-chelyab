import React, {useState} from 'react'
import cl from '../../styles/UI-modules.module.css'

function Input(props) {

	const [state, setState] = useState({});
	return (
		<div>
			<div>{props.name}</div>
			<input placeholder="Название..." className={cl.Input} {...props}/>
		</div>

	);
}

export default Input;