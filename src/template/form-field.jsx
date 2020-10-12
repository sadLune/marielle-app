import React from 'react'

export default props => (
    <li className="form-field">
        <label>{props.label}</label>
        <input type='text' placeholder='Digite aqui' 
            name={props.name} value={props.value}
            onChange={props.handleChange}/>
    </li>
)