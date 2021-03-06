import React from "react";

function Textarea(props)
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__textarea">
                <textarea id={props.name} name={props.name} value={props.value} onChange={props.updateInput.bind(null,props.connectionName,props.selectedButtonIndex)} />
                <label htmlFor={props.name}>{props.label}</label>
            </div>
        </div>
    );
}

export default Textarea;