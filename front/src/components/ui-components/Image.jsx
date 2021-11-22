import React, {useState} from 'react'
import cl from '../../styles/UI-modules.module.css'

function Input({visible, image}) {

	let style = visible ? cl.Image : cl.NotImage;
	return (
		<img src={image} className={style}/>
	);
}

export default Input;