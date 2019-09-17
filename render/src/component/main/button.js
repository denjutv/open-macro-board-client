import React from "react";
import board from "../../container/main/board";

function Button( props )
{
    return (
        <div className={`openDeck__item${props.isSelected ? " isActive" : "" }`}
            onClick={props.selectButton.bind(null, props.index)}
        >
            {
                props.button.isUsed ?
                <div className="openDeck__iteminner">
                    <div className="openDeckButton" style={{transform: "translate(-50%, -50%) scale(0.604)" }}>
                    {/* style="transform: "translate(-50%, -50%)" scale(0.604);" */}
                        <div className="openDeckButton__icon" style={
                            {
                                marginTop: `${props.button.iconTranslationY}px`,
                                marginLeft: `${props.button.iconTranslationX}px`,
                                transform: `translate(-50%, -50%) scale(${props.button.iconScale})`
                            }
                        }>
                            <img src={props.button.iconPath} />
                        </div>
                        <div className="openDeckButton__label"
                            style={
                                {
                                    marginBottom: `${props.button.labelTranslationY}px`,
                                    marginLeft: `${props.button.labelTranslationX}px`,
                                    transform: `scale(${props.button.labelScale})`
                                }
                            }
                        >
                            {props.button.label}
                        </div>
                    </div>
                </div>
                :
                <span></span>
            }
        </div>
    );
}

export default Button;