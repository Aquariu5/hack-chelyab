import React, {useEffect, useState} from 'react'
import cl from '../../styles/UI-modules.module.css'

function Table({name, head, body, modal}) {

	const [state, setState] = useState({});
    useEffect(() => {
        modal ? setState(cl.TableModal) : setState(cl.Table);
        console.log('newbodyintable', body);
    });
    
	return (
		<table className={state}>
            <header>{name}</header>
            <body>
                <tr>
                    {
                        head.map(el => <td style={{
                            background: 'rgb(158, 186, 230)',
                            textAlign: 'center',
                            fontSize: '18px'
                        }}>{el}</td>)
                    }
                </tr>
                {
                    body.map(str => {
                        return (<tr>
                            {
                                str.map(cell => <td>{cell}</td>)
                            }
                        </tr>)
                    })
                }
            </body>
        </table>

	);
}

export default Table;

