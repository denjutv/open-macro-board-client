import React from "react";

function Text(props)
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__input">
                <input id={props.name} name={props.name} type="text" value={props.value} />
                <label htmlFor={props.name}>{props.label}</label>
            </div>
        </div>
    );
}

export default Text;