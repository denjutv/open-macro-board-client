import React from "react";
import Button from "./button";

function Board( props )
{
    return (
        <div className="main__deck">

            {/* deck */}
            <div className="openDeck">

                {/* <!-- head --> */}
                {/* <div className="openDeck__name" contentEditable="true"></div> */}
                <div className="openDeck__name">{props.connection.name}</div>

                <div className="openDeck__outer">
                    <div className="openDeck__inner">


                        <div className="openDeck__grid">

                            {/* <!-- hidden feature --> */}
                            {/* <div className="openDeckFullscreen">
                                <img src="" alt="" />
                            </div> */}

                            {
                                props.buttons.map( (button, index) =>
                                    <Button
                                        key={index}
                                        isSelected={props.selectedButtonIndex === index}
                                        button={button}
                                        index={index}
                                        selectButton={props.selectButton.bind(null,props.connection.name)}
                                    />
                                )
                            }
                            {/* <div className="openDeck__item isActive">
                                <div className="openDeck__iteminner">
                                    <div className="openDeckButton" style={{transform: "translate(-50%, -50%) scale(0.604)"}}>
                                        <div className="openDeckButton__icon">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="openDeckButton__label">
                                            YouTube
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="openDeck__item">
                                <div className="openDeck__iteminner">
                                    <div className="openDeckButton" style={{transform: "translate(-50%, -50%) scale(0.604)"}}>
                                        <div className="openDeckButton__icon">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="openDeckButton__label">
                                            Photoshop
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="openDeck__item">
                                <div className="openDeck__iteminner">
                                    <div className="openDeckButton" style={{transform: "translate(-50%, -50%) scale(0.604)"}}>
                                        <div className="openDeckButton__icon">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="openDeckButton__label">
                                            eBay
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>

                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>

                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div>
                            <div className="openDeck__item"><span></span></div> */}
                        </div>
                    </div>

                    {/* <div className="openDeck__new">
                        <span>Ordneransicht</span>
                    </div> */}
                </div>

            </div>

        </div>
    );
}

export default Board;