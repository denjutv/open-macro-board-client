import React from "react";
import { withTranslation } from "react-i18next";

function KeyValueEntry(props)
{
    const id = `${props.name}[${props.index}]`;
    return (
        <div className="openTable__row isActive">
            <div className="openTable__col openTable__col--chk">
                <div className="deckForm__checkbox">
                    <input id={id + ".checked"} name="checked" type="checkbox" checked={props.checked} onChange={props.updateInput} disabled={props.isLast} />
                    <label htmlFor={id + ".checked"}></label>
                </div>
            </div>
            <div className="openTable__col">
                <div className="deckForm__input deckForm__input--param">
                    <input type="text" name="key" value={props.entryKey} placeholder="Key" onChange={props.updateInput} />
                </div>
            </div>
            <div className="openTable__col">
                <div className="deckForm__input deckForm__input--param">
                    <input type="text" name="value" value={props.value} placeholder="Value" onChange={props.updateInput} />
                </div>
            </div>
        </div>
    );
}

function KeyValueList(props)
{
    const {t} = props;

    const list = props.value.slice();
    list.push( {checked: true, name:"", key:"" } );

    return (
        <div className="deckForm__group">
            <div className="deckForm__head">
                {props.headlinePrefix && <span>{props.headlinePrefix}</span>} {props.headline}
            </div>

            <div className="openTable">

                <div className="openTable__row openTable__row--header">
                    <div className="openTable__col openTable__col--chk">
                        <div className="openTable__chk"></div>
                    </div>
                    <div className="openTable__col">
                        {t("macroSettingsKey")}
                    </div>
                    <div className="openTable__col">
                        {t("macroSettingsValue")}
                    </div>
                </div>

                {
                    list.map( (entry,index) =>
                        <KeyValueEntry
                            key={index}
                            index={index}
                            name={props.name}
                            checked={entry.checked}
                            entryKey={entry.key}
                            value={entry.value}
                            keyPlaceholder={props.keyPlaceholder || ""}
                            valuePlaceholder={props.valuePlaceholder || ""}
                            updateInput={props.updateInput.bind(null,props.connectionName,props.selectedButtonIndex,props.name,props.value,index)}
                            isLast={index===list.length-1}
                        />
                    )
                }
                
            </div>
        </div>
    );
}

export default withTranslation()(KeyValueList);