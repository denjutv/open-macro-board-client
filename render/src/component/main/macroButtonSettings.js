import React from "react";
import Dropdown from "../../container/input/dropdown";
import Text from "../../container/input/text";
import File from "../../container/input/file";
import Textarea from "../../container/input/textarea";
import Checkbox from "../../container/input/checkbox";
import CheckboxGroup from "../input/checkboxGroup";
import RadioGroup from "../../container/input/radioGroup";
import KeyValueList from "../../container/input/keyValueList";
import Password from "../../container/input/password";
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
                                markup = <Dropdown {...definition} />;
                            break;
                            case "text":
                                markup = <Text {...definition} />;
                            break;
                            case "file":
                                markup = <File {...definition} />;
                            break;
                            case "textarea":
                                markup = <Textarea {...definition} />;
                            break;
                            case "checkbox":
                                markup = <Checkbox {...definition} />;
                            break;
                            case "checkboxGroup":
                                markup = <CheckboxGroup {...definition} checkboxes={checkboxes} />;
                            break;
                            case "radioGroup":
                                markup = <RadioGroup {...definition} />;
                            break;
                            case "keyValueList":
                                markup = <KeyValueList {...definition} />;
                            break;
                            case "password":
                                markup = <Password {...definition} />;
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