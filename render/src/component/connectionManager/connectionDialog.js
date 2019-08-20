import React from "react";
import { withTranslation } from "react-i18next";

function NewConnectionDialog( props )
{
    const {t} = props;

    return (
        <div className="modal">
            <div className="modal__inner">
                <div className="modal__overlay" onClick={props.close}></div>

                <div className="modal__modal">

                    <header className="modal__header">
                        <h2>{t("connectionConfigCreateConnection")}</h2>
                            <div className="modal__close" onClick={props.close}>
                                {t("close")}
                            </div>
                    </header>

                    <main className="modal__main">
                        <div className="deckForm__input">
                            <input id="con_name" name="name" type="text" placeholder="Verbindung 1" value={props.connection.name} onChange={props.updateConfigConnection} />
                            <label htmlFor="con_name">{t("connectionConfigConnetionName")}</label>
                        </div>
                        <div className="deckForm__input">
                            <input id="con_host" name="host" type="text" placeholder="192.168.1.100" required="" value={props.connection.host} onChange={props.updateConfigConnection} />
                            <label htmlFor="con_host">{t("connectionConfigHost")}</label>
                        </div>
                        <div className="deckForm__input">
                            <input id="con_port" name="port" type="text" placeholder="8080" value={props.connection.port} onChange={props.updateConfigConnection} />
                            <label htmlFor="con_port">{t("connectionConfigPort")}</label>
                        </div>
                        <div className="deckForm__input">
                            <input id="con_pass" name="password" type="password" placeholder="*******" value={props.connection.password} onChange={props.updateConfigConnection} />
                            <label htmlFor="con_pass">{t("connectionConfigPassword")}</label>
                        </div>
                        <div className="deckForm__input">
                            <input id="con_pass" name="passwordRepeat" type="password" placeholder="*******" value={props.connection.passwordRepeat} onChange={props.updateConfigConnection} />
                            <label htmlFor="con_pass">{t("connectionConfigPasswordRepeat")}</label>
                        </div>
                        <div className="modal__spacer"></div>
                    </main>

                    <footer className="modal__footer">
                        <div className="ctaButton ctaButton--layer ctaButton--half ctaButton--cancel" onClick={props.close}>
                            {t("abort")}
                        </div>
                        <div className="ctaButton ctaButton--layer ctaButton--half ctaButton--add" onClick={props.saveHandler.bind(null,props.connection,props.connections, props.originalConnectionName)}>
                            <span>{props.saveButtonIcon}</span>{t(props.saveButtonLabel)}
                        </div>
                    </footer>

                </div>

            </div>
	    </div>
    );
}

export default withTranslation()(NewConnectionDialog);