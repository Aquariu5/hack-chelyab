import React, {useState} from 'react'
import cl from '../../styles/UI-modules.module.css'

function Select({options, props, onChange}) {
        
	return (
		<select className={cl.Select} {...props} onChange={onChange}>
                <option></option>
                {
                    options.map(el => <option>{el}</option>)
                }
        </select>
	);
}
export default Select;