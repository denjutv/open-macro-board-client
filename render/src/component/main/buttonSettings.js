import React from "react";

function ButtonSettings( props )
{
    return (
        <div className="main__builder">

            <div className="deckBuilder">

                {/* <!-- head --> */}
                <div className="openDeck__name">
                    Einstellungen
                </div>

                <div className="deckBuilder__outer">
                    <div className="deckBuilder__inner">

                            <div className="deckForm__input">
                                <input type="text" value="YouTube" />
                                <label htmlFor="test1">Name</label>
                            </div>

                        <div className="deckForm__group">

                            <div className="deckForm__head">
                                <span>image</span>Icon
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="0.6" min="0" max="2" step="0.05" />
                                <label htmlFor="range">Skalieren</label>
                                <output>0.6</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="-15" min="-200" max="200" step="1" />
                                <label htmlFor="range">Ausrichtung Y</label>
                                <output>-15</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="0" min="-200" max="200" step="1" />
                                <label htmlFor="range">Ausrichtung X</label>
                                <output>0</output>
                            </div>

                        </div>

                        <div className="deckForm__group">

                            <div className="deckForm__head">
                                <span>payment</span>Label
                            </div>


                            <div className="deckForm__range">
                                <input type="range" value="1" min="0" max="2" step="0.05" />
                                <label htmlFor="range">Skalieren</label>
                                <output>1</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="25" min="-200" max="200" step="1" />
                                <label htmlFor="range">Ausrichtung Y</label>
                                <output>25</output>
                            </div>

                            <div className="deckForm__range">
                                <input type="range" value="0" min="-200" max="200" step="1" />
                                <label htmlFor="range">Ausrichtung X</label>
                                <output>0</output>
                            </div>

                        </div>

                    </div>
                    <div className="openDeck__new">
                        <span>irgendwas</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ButtonSettings;