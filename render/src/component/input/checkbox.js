import React from "react";

function Checkbox(props)
{
    return (
        <div className="deckForm__checkbox">
            <input id={props.name} type="checkbox" name={props.name} checked={props.checked} />
            <label htmlFor={props.name}></label>
            <span>{props.label}</span>
        </div>
    );
}

export default Checkbox;
