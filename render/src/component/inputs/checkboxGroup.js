import React from "react";
import Checkbox from "./checkbox";

function CheckboxGroup(props)
{
    return (
        <div className="deckForm__group">
            <div className="deckForm__head">
                {props.headline}
            </div>
            {
                props.checkboxes.map( (checkbox) =>
                    <Checkbox key={checkbox.name} name={checkbox.name} label={checkbox.label} checked={checkbox.checked} />
                )
            }
        </div>
    );
}

export default CheckboxGroup;