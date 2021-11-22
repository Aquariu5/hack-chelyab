import React, {useState} from 'react'
import cl from '../../styles/UI-modules.module.css'
import Input from './Input';
import MenuButton from './MenuButton';
import Select from './Select';
function BaseForm({onChangeInput, onChangeSelect, options, add, deleteById}) {
	return (
		<div className={cl.BaseForm}>
            <h3>Форма допуска</h3>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

                <Input onChange={e => onChangeInput(e)}></Input>
                <Select options={options} onChange={e => onChangeSelect(e)} />
            </div>
            <MenuButton onClick={add} name="Добавить" />
            <MenuButton onClick={deleteById} name="Удалить" />

        </div>
	);
}

export default BaseForm;


