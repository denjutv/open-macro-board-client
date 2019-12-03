import React from "react";
import Dropdown from "../../container/input/dropdown";
import Text from "../../container/input/text";
import Textarea from "../../container/input/textarea";
import Checkbox from "../../container/input/checkbox";
import CheckboxGroup from "../input/checkboxGroup";
import RadioGroup from "../../container/input/radioGroup";
import KeyValueList from "../input/keyValueList";

function MacroButtonSettings(props)
{
    const checkboxes = [
        {name:"check1", label:"check1",checked:true},
        {name:"check2", label:"check2",checked:false},
        {name:"check3", label:"check3",checked:true}
    ];

    const radios = [
        {name:"check1", label:"check1",value:"1"},
        {name:"check2", label:"check2",value:"2"},
        {name:"check3", label:"check3",value:"3"}
    ];

    const list = [
        {checked:true, key:"entry1",value:"3"},
        {checked:false, key:"entry2",value:"2"},
        {checked:true, key:"entry3",value:"1"}
    ];

    return (
        <div className="deckBuilder__inner">

            <Text name="Bar" label="Bar" />

            <Dropdown name="foo" label="Foo" options={[{value:0,label:"option1"},{value:1,label:"option2"},{value:2,label:"option3"}]} />

            <Textarea name="Test" label="Test" />

            <Checkbox name="mycheck" label="mycheck" />

            <CheckboxGroup headline="Ich bin eine Überschrift!!" checkboxes={checkboxes} />

            <RadioGroup headline="Radio Gaga" name="radioGaga" radios={radios} />

            <KeyValueList name="list" headline="Wunschliste" list={list} />
        </div>
    );
}

export default MacroButtonSettings;