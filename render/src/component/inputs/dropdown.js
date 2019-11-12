import React from "react";

function Dropdown(props)
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__select">
                <select id={props.name} name={props.name} value={props.value}>
                    {props.options.map( (option,index) =>
                        <option key={index} value={option.value}>{option.label}</option>
                    )}
                </select>
                <label htmlFor={props.name}>Select</label>
            </div>
        </div>
    )
}

export default Dropdown;