import React from "react";
import Checkbox from "../../container/input/checkbox";

function CheckboxGroup(props)
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__head">
                {props.label}
            </div>
            {
                props.checkboxes.map( (checkbox) =>
                    <Checkbox key={checkbox.name} name={checkbox.name} label={checkbox.label} />
                )
            }
        </div>
    );
}

export default CheckboxGroup;