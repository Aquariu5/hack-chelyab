import React, {useEffect, useState} from 'react'
import cl from '../../styles/UI-modules.module.css'
import InputButton from './InputButton';
import { compareStrings, stringInArr } from '../../utils/compareStrings';
function InputWithSelect({name, value, setValue, onChange, options,filteredOptions, setAnotherValue, anotherOptions}) {

	const [state, setState] = useState({});
    const [chosen, setChosen] = useState(false);
    const [style, setStyle] = useState(cl.Input)
    const clicked = (el) => {
        setValue(el);
        

        //let idxForFull = cities.findIndex(dic => dic.split(":")[0] == category);
        //let idxForSemi = cities.findIndex(dic => dic.split(":")[1] == categoryNum);
        let idx = options.findIndex(opt => opt == el); // полюбэ будет индекс
        //console.log('el', el, idx, options);
        if (idx != -1)
            setAnotherValue(anotherOptions[idx])

        setChosen(true);
        
    }

    useEffect(() => {
        if (stringInArr(value, options)) { // слово вхождение, тогда все ОК
            setStyle(cl.Input);
        }
        else {
            setStyle(cl.InputWrong) // иначе красная рамка
        }

    })
	return (
		<div>
			<div>{name}</div>
			<input placeholder="Название..." className={style} value={value} onChange={onChange}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                filteredOptions ?
                filteredOptions.map(el => {
                    //console.log('optionslen', options.length, stringInArr(value, options))
                    if ((filteredOptions && filteredOptions.length <=3 && !stringInArr(value, options)) || 
                    (value && el.includes(value) && value.length > 0 && !stringInArr(value, options)) )
                        return <InputButton key={el} style={{textAlign: 'left'}} onClick={ () => clicked(el)} name= {el}/>
                })
                :
                options.map(el => {
                    //console.log('optionslen', options.length, stringInArr(value, options))
                    if (/*(filteredOptions && filteredOptions.length <=3 && !stringInArr(value, options)) || */
                    (value && el.includes(value) && value.length > 0 && !stringInArr(value, options)) )
                        return <InputButton key={el} style={{textAlign: 'left'}} onClick={ () => clicked(el)} name= {el}/>
                })
                }
            </div>

		</div>

	);
}

export default InputWithSelect;