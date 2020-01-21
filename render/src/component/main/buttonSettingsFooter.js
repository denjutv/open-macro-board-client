import React from "react";

function ButtonSettingsFooter(props)
{
    if( !props.isButtonChanged )
    {
        return null;
    }

    return (
        <div>
            <button onClick={props.saveButton.bind(null,props.connection.name, props.selectedButtonIndex, props.button)}>speichern</button>
            <button onClick={props.resetButton.bind(null,props.connection.name, props.selectedButtonIndex)}>rückgängig</button>
        </div>
    )
};

export default ButtonSettingsFooter;