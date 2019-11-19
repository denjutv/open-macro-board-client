import React from "react";
import Dropdown from "../inputs/dropdown";

function MacroButtonSettings(props)
{
    return (
        <div className="deckBuilder__inner">
            <Dropdown name="foo" options={[{value:0,label:"option1"},{value:1,label:"option2"},{value:2,label:"option3"}]}
                value={1} />
        </div>
    );
}

export default MacroButtonSettings;