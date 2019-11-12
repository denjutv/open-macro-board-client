import React from "react";
import VisualButtonSettings from "./visualButtonSettings";
import { withTranslation } from "react-i18next";

function ButtonSettings( props )
{
    const {t} = props;

    return (
        <div className="main__builder">

            <div className="deckBuilder">

                {/* <!-- head --> */}
                <div className="openDeck__name">
                    {t("buttonSettingsHeadline")}
                </div>

                <div className="deckBuilder__outer">
                    <div className="openTabs">
                        <div className="openTabs__tabheader">
                            <ul>
                                <li className={props.activeTabIndex === 0 ? "isActive" : ""}
                                    onClick={props.setActiveTab.bind(null,0)}>
                                    {t("buttonSettingsVisualsTab")}
                                    </li>
                                <li className={props.activeTabIndex === 1 ? "isActive" : ""}
                                    onClick={props.setActiveTab.bind(null,1)}>
                                    {t("buttonSettingsMacroTab")}
                                </li>
                            </ul>
                        </div>
                        <div className="openTabs__tabcontent">
                            <ul>
                                <li className={props.activeTabIndex === 0 ? "isActive" : ""}>
                                    <VisualButtonSettings button={props.button}
                                        updateButton={props.updateButton}
                                        selectedButtonIndex={props.selectedButtonIndex}
                                        openIconFileDialog={props.openIconFileDialog}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* <div className="openDeck__new">
                        <span>irgendwas</span>
                    </div> */}
                </div>

            </div>

        </div>
    );
}

export default withTranslation()(ButtonSettings);