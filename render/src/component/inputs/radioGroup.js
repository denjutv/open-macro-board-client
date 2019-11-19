import React from "react";

function Radio(props)
{
    return (
        <div className="deckForm__radio">
            <input id={props.name} name={props.groupName} type="radio" value={props.value} checked={props.checked} />
            <label htmlFor={props.name}></label>
            <span>{props.label}</span>
        </div>
    );
}

function RadioGroup( props )
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__head">
                {props.headline}
            </div>
            {
                props.radios.map( radio =>
                    <Radio
                        key={radio.name}
                        name={radio.name}
                        groupName={props.name}
                        value={props.value}
                        label={radio.label}
                        checked={props.value === radio.value}
                    />
                )
            }
            
        </div>
    );
}

export default RadioGroup;