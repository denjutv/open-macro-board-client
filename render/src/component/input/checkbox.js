import React from "react";

function Checkbox(props)
{
    return (
        <div className="deckForm__checkbox">
            <input id={props.name} type="checkbox" name={props.name} checked={props.checked} onChange={props.updateInput.bind(null,props.connectionName,props.selectedButtonIndex)} />
            <label htmlFor={props.name}></label>
            <span>{props.label}</span>
        </div>
    );
}

export default Checkbox;
