import React from "react";

function Button( props )
{
    return (
        <div className={`openDeck__item${props.isSelected ? " isActive" : "" }`}
            onClick={props.selectButton.bind(null, props.index)}
        >
            <span></span>
        </div>
    );
}

export default Button;