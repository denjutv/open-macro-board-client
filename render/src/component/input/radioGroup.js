import React from "react";

function Radio(props)
{
    const id = `${props.groupName}_${props.name}`;
    return (
        <div className="deckForm__radio">
            <input id={id} name={props.groupName} type="radio" value={props.value} checked={props.checked} onChange={props.updateInput} />
            <label htmlFor={id}></label>
            <span>{props.label}</span>
        </div>
    );
}

function RadioGroup( props )
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__head">
                {props.label}
            </div>
            {
                props.options.map( radio =>
                    <Radio
                        key={radio.name}
                        name={radio.name}
                        groupName={props.name}
                        value={radio.value}
                        label={radio.label}
                        checked={props.value === radio.value}
                        updateInput={props.updateInput.bind(null,props.connectionName,props.selectedButtonIndex)}
                    />
                )
            }
            
        </div>
    );
}

export default RadioGroup;