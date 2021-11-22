import React, {useState} from 'react'
import cl from '../../styles/UI-modules.module.css'
import {useSelector, useDispatch} from "react-redux";
function LeftButton(props) {
	let display = useSelector(state =>  state.displayReducer.display);
	const dispath = useDispatch();
	console.log('maindisplaystate', display);
	const ChangeDisplay = () => {
		console.log('displaystate', display);
		dispath({type: "SET_DISPLAY", payload: !display})
	}

	return (
	<div>
		<button className={cl.LeftButton}  onClick={ChangeDisplay}>{props.name}</button>
  	</div>
	);
}

export default LeftButton;