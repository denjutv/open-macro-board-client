import React from "react";
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
                    <div className="deckBuilder__inner">

                            <div className="deckForm__input">
                                <input type="text" value="YouTube" />
                                <label htmlFor="test1">{t("buttonSettingsName")}</label>
                            </div>

                        <div className="deckForm__group">

                            <div className="deckForm__head">
                                <span>image</span>{t("buttonSettingsIcon")}
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="0.6" min="0" max="2" step="0.05" />
                                <label htmlFor="range">{t("buttonSettingsScale")}</label>
                                <output>0.6</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="-15" min="-200" max="200" step="1" />
                                <label htmlFor="range">{t("buttonSettingsTranslation")} X</label>
                                <output>-15</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="0" min="-200" max="200" step="1" />
                                <label htmlFor="range">{t("buttonSettingsTranslation")} Y</label>
                                <output>0</output>
                            </div>

                        </div>

                        <div className="deckForm__group">

                            <div className="deckForm__head">
                                <span>payment</span>{t("buttonSettingsLabel")}
                            </div>


                            <div className="deckForm__range">
                                <input type="range" value="1" min="0" max="2" step="0.05" />
                                <label htmlFor="range">{t("buttonSettingsScale")}</label>
                                <output>1</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="25" min="-200" max="200" step="1" />
                                <label htmlFor="range">{t("buttonSettingsTranslation")} X</label>
                                <output>25</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="0" min="-200" max="200" step="1" />
                                <label htmlFor="range">{t("buttonSettingsTranslation")} Y</label>
                                <output>0</output>
                            </div>

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