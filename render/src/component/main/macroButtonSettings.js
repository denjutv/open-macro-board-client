import React from "react";
import Dropdown from "../../container/input/dropdown";
import Text from "../../container/input/text";
import Textarea from "../../container/input/textarea";
import Checkbox from "../../container/input/checkbox";
import CheckboxGroup from "../input/checkboxGroup";
import RadioGroup from "../../container/input/radioGroup";
import KeyValueList from "../../container/input/keyValueList";

function MacroButtonSettings(props)
{
    const {t} = props;

    console.log(props.macro);

    return (
        <div className="deckBuilder__inner">

            <Dropdown name="macroType" label={t("macroType")} options={props.macroList} />

            {
                props.macro && 
                props.macro.dataDefinition.map( (field,i) => {
                    let markup = null;
                    switch( field.inputType )
                    {
                        case "dropdown":
                            markup = <Dropdown name={field.name} label={field.label} options={field.options} />;
                        break;
                        case "text":
                            markup = <Text name={field.name} label={field.label} />;
                        break;
                        case "textarea":
                            markup = <Textarea name={field.name} label={field.label} />;
                        break;
                        case "checkbox":
                            markup = <Checkbox name={field.name} label={field.label} />;
                        break;
                        case "checkboxGroup":
                            markup = <CheckboxGroup label={field.label} checkboxes={checkboxes} />;
                        break;
                        case "radioGroup":
                            markup = <RadioGroup label={field.label} name={field.name} options={field.options} />;
                        break;
                        case "keyValueList":
                            markup = <KeyValueList name={field.name} label={field.label} />;
                        break;
                    }

                    return <React.Fragment key={i}>{markup}</React.Fragment>;
                } )
            }

        </div>
    );
}

export default MacroButtonSettings;