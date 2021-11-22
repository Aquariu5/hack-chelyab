import React, {useState} from 'react'
import '../../styles/Menu.css'

function Button(props) {

	const [state, setState] = useState({});
	return (
	<div>
		<button>{props.name}</button>
  	</div>
	);
}

export default Button;