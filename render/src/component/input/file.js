import React from "react";

function File(props)
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__input">
                {/* <input id={props.name} name={props.name} type="file" value={props.value} onChange={props.updateInput.bind(null,props.connectionName,props.selectedButtonIndex)} /> */}
                {/* <label htmlFor={props.name}>{props.label}</label> */}
                <button onClick={props.openFileDialog.bind(null, props.connectionName,props.selectedButtonIndex)}>{props.label}</button>
                <label>{props.value}</label>
            </div>
        </div>
    );
}

export default File;