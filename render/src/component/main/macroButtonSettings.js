import React from "react";
import Dropdown from "../../container/input/dropdown";
import Text from "../../container/input/text";
import File from "../../container/input/file";
import Textarea from "../../container/input/textarea";
import Checkbox from "../../container/input/checkbox";
import CheckboxGroup from "../input/checkboxGroup";
import RadioGroup from "../../container/input/radioGroup";
import KeyValueList from "../../container/input/keyValueList";
import MacroDropdown from "../input/dropdown";
import Footer from "../../container/main/buttonSettingsFooter";

function MacroButtonSettings(props)
{
    const {t} = props;

    return (
        <div className="deckBuilder__inner">

            <MacroDropdown name="macroType" value={props.macroType} label={t("macroType")} options={props.macroList} updateInput={props.changeMacroType.bind(null,props.macros, props.macro)} connectionName={props.connectionName} selectedButtonIndex={props.selectedButtonIndex} />

            {
                props.macro && 
                props.macro.dataDefinition.map( (definition,i) => {
                    let markup = null;
                    if( definition.isVisible )
                    {
                        switch( definition.inputType )
                        {
                            case "dropdown":
                                markup = <Dropdown name={definition.name} label={definition.label} options={definition.options} />;
                            break;
                            case "text":
                                markup = <Text name={definition.name} label={definition.label} />;
                            break;
                            case "file":
                                markup = <File name={definition.name} label={definition.label} />;
                            break;
                            case "textarea":
                                markup = <Textarea name={definition.name} label={definition.label} />;
                            break;
                            case "checkbox":
                                markup = <Checkbox name={definition.name} label={definition.label} />;
                            break;
                            case "checkboxGroup":
                                markup = <CheckboxGroup label={definition.label} checkboxes={checkboxes} />;
                            break;
                            case "radioGroup":
                                markup = <RadioGroup label={definition.label} name={definition.name} options={definition.options} />;
                            break;
                            case "keyValueList":
                                markup = <KeyValueList name={definition.name} label={definition.label} />;
                            break;
                        }
                    }

                    return <React.Fragment key={i}>{markup}</React.Fragment>;
                } )
            }

            <Footer connection={props.connection} />
        </div>
    );
}

export default MacroButtonSettings;