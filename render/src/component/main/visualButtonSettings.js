import React from "react";
import { withTranslation } from "react-i18next";
import { SketchPicker } from 'react-color';
import Footer from "../../container/main/buttonSettingsFooter";

function VisualButtonSettings(props)
{
    const {t} = props;

    return (
        <div className="deckBuilder__inner">

            <div className="deckForm__group">
                <div className="deckForm__input">
                    <input type="text" name="label" value={props.button.label} onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="test1">{t("buttonSettingsName")}</label>
                </div>
            </div>

            <div className="deckForm__group">

                <div className="deckForm__head">
                    <span>palette</span>{t("buttonSettingsBackgroundColor")}
                </div>

                <div className="deckForm__color">
                    {/* <ul>
                        <li><span style={{background: "#ff0000"}}></span></li>
                        <li><span style={{background: "#00ff00"}}></span></li>
                        <li><span style={{background: "#0000ff"}}></span></li>
                        <li className="add"><span></span></li>
                    </ul> */}
                    <SketchPicker color={props.button.backgroundColor} onChange={(color) => props.updateButtonEx( props.selectedButtonIndex, "backgroundColor", color.hex )}/>
                </div>
            </div>

            <div className="deckForm__group">

                <div className="deckForm__head">
                    <span>image</span>{t("buttonSettingsIcon")}
                </div>

                <button onClick={props.openIconFileDialog.bind(null, props.button.iconPath, props.selectedButtonIndex)}>Icon hochladen</button>

                <div className="deckForm__range">
                    <input type="range" name="iconScale" value={props.button.iconScale} min="0" max="2" step="0.05" onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="range">{t("buttonSettingsScale")}</label>
                    <output>{props.button.iconScale}</output>
                </div>

                <div className="deckForm__range">
                    <input type="range" name="iconTranslationX" value={props.button.iconTranslationX} min="-200" max="200" step="1" onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="range">{t("buttonSettingsTranslation")} X</label>
                    <output>{props.button.iconTranslationX}</output>
                </div>

                <div className="deckForm__range">
                    <input type="range" name="iconTranslationY" value={props.button.iconTranslationY} min="-200" max="200" step="1" onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="range">{t("buttonSettingsTranslation")} Y</label>
                    <output>{props.button.iconTranslationY}</output>
                </div>

            </div>

            <div className="deckForm__group">

                <div className="deckForm__head">
                    <span>payment</span>{t("buttonSettingsLabel")}
                </div>


                <div className="deckForm__range">
                    <input type="range" name="labelScale" value={props.button.labelScale} min="0" max="2" step="0.05" onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="range">{t("buttonSettingsScale")}</label>
                    <output>{props.button.labelScale}</output>
                </div>

                <div className="deckForm__range">
                    <input type="range" name="labelTranslationX" value={props.button.labelTranslationX} min="-200" max="200" step="1" onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="range">{t("buttonSettingsTranslation")} X</label>
                    <output>{props.button.labelTranslationX}</output>
                </div>

                <div className="deckForm__range">
                    <input type="range" name="labelTranslationY" value={props.button.labelTranslationY} min="-200" max="200" step="1" onChange={props.updateButton.bind(null, props.selectedButtonIndex)} />
                    <label htmlFor="range">{t("buttonSettingsTranslation")} Y</label>
                    <output>{props.button.labelTranslationY}</output>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}

export default withTranslation()(VisualButtonSettings);