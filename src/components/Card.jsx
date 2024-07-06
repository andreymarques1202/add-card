import React from "react";
import CardFront from "../img/bg-card-front.png";
import CardBack from "../img/bg-card-back.png";


const MainContainerCard = () => {
    return(
        <>
            <div className="container-card">
                <div className="container img-background">
                <div className="card-front">
                    <div id="circle-white"></div>
                    <div id="min-circle"></div>
                    <p id="card">0000 0000 0000 000</p>
                    <p id="name-card">BILLY BRUTO</p>
                    <p id="validade">00/00</p>
                    <p></p>
                    <img src={CardFront} alt="card-front" />
                </div>
                <div className="card-back">
                    <img src={CardBack} alt="card-back" />
                </div>
                </div>
                <div className="container card-background">
                    <form action="" classNama="form-container">
                        <div className="form-controller">
                            <label htmlFor="card-name">CARDHOLDER NAME</label><br />
                            <input type="text" name="card-name" id="card-name" placeholder="e.g. Billy bruto"/>
                        </div>
                        <div className="form-controller">
                            <label htmlFor="card-number">CARD NUMBER</label><br />
                            <input type="text" name="card-number" id="card-number" placeholder="e.g. 1234 5678 9123 0000"/>
                        </div>
                        <div className="flex-card">
                        <div className="flex-cardContainer">
                            <label htmlFor="card-date">EXP. DATE (MM/YY)</label><br />
                            <input type="text" name="card-date-month" id="card-date-month" placeholder="MM"/>
                            <input type="text" name="card-date-year" id="card-date-year" placeholder="YY"/>
                        </div>
                        <div className="flex-cardContainer">
                        <label htmlFor="card-cvc" className="cvc">CVC</label><br />
                        <input type="text" name="card-cvc" id="card-cvc" placeholder="e.g. 123"/>
                        </div>

                        </div>
                        <input type="button" value="Confirm" id="confirm"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainContainerCard;