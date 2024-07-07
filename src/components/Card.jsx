import React, { useState } from "react";
import CardFront from "../img/bg-card-front.png";
import CardBack from "../img/bg-card-back.png";


const MainContainerCard = () => {
    const [cardNumber, setCard] = useState("0000 0000 0000 0000");
    const [cardName, setName] = useState("BILLY BRUTO");
    const [cardMonth, setMonth] = useState("00");
    const [cardYear, setYear] = useState("00");
    const [cardCvc, setCvc] = useState("");
    const [form, setForm] = useState(true);

    const onChangeName = (event) => {
       let name = event.target.value.replace(/[^A-Za-z]*$/g, "");
       
       if(name.length > 20) {
        name = name.slice(0, 20);
       }
       
       setName(name); 
    }

    const onChageNumber = (event) => {
        let card = event.target.value.replace(/\D/g, "");
        card = card.replace(/(\d{4})(?=\d)/g, "$1 ");

        if(card.length > 19) {
            card = card.slice(0, 19);
        }
        
        setCard(card);
    }

    const onChangeMonth = (event) => {
        let month = event.target.value.replace(/\D/g, "");
        if(month.length > 2) {
            month = month.slice(0, 2);
        }

        const monthFinal = parseInt(month, 10);
        


        
        monthFinal >= 1 && monthFinal <= 9 ? month = "0" + monthFinal : month = monthFinal >= 1 && monthFinal <= 12 ? month = monthFinal : month = "00";


        setMonth(month);
    }

    const onChangeYear = (event) => {
        let year = event.target.value.replace(/\D/g, "");
        if(year.length > 2) {
            year = year.slice(0, 2);
        }

        const yearFinal = parseInt(year, 10);

        yearFinal >= 1 && yearFinal <= 9 ? year = "0" + yearFinal : year = yearFinal >= 1 && yearFinal <= 37 ? year = yearFinal : year = "00";
        
        setYear(year);
    }

    const onChangeCvc = (event) => {
        let cvc = event.target.value.replace(/^\d{0,3}$/.test(cardCvc));

        setCvc(cvc);
    }

    const onSubmitCard = () => {
        setForm(!form);
    }

    const onFinish = () => {
        setForm(true);
    }

    return(
        <>
            <div className="container-card">
                <div className="container img-background">
                <div className="card-front">
                    <div id="circle-white"></div>
                    <div id="min-circle"></div>
                    <p id="card">{cardNumber}</p>
                    <p id="name-card" style={{textTransform: "uppercase"}}>{cardName}</p>
                    <p id="validade">{cardMonth}/{cardYear}</p>
                    <img src={CardFront} alt="card-front" />
                </div>
                <div className="card-back">
                    <img src={CardBack} alt="card-back" />
                </div>
                </div>
                <div className="container card-background">
                    {form ? (
                        <form action={onSubmitCard} className="form-container" style={{display: 'block'}}>
                        <div className="form-controller">
                            <label htmlFor="card-name">CARDHOLDER NAME</label><br />
                            <input type="text" name="card-name" id="card-name" placeholder="e.g. Billy bruto" onChange={onChangeName} />
                        </div>
                        <div className="form-controller">
                            <label htmlFor="card-number">CARD NUMBER</label><br />
                            <input type="text" name="card-number" id="card-number" placeholder="e.g. 1234 5678 9123 0000" onChange={onChageNumber} maxLength={19}/>
                        </div>
                        <div className="flex-card">
                        <div className="flex-cardContainer">
                            <label htmlFor="card-date">EXP. DATE (MM/YY)</label><br />
                            <input type="text" name="card-date-month" id="card-date-month" placeholder="MM" onChange={onChangeMonth} maxLength={2}/>
                            <input type="text" name="card-date-year" id="card-date-year" placeholder="YY" onChange={onChangeYear} maxLength={2}/>
                        </div>
                        <div className="flex-cardContainer">
                        <label htmlFor="card-cvc" className="cvc">CVC</label><br />
                        <input type="text" name="card-cvc" id="card-cvc" placeholder="e.g. 123" onChange={onChangeCvc} maxLength={3}/>
                        </div>

                        </div>
                        <input type="button" value="Confirm" id="confirm" onClick={onSubmitCard}/>
                    </form>
                    ) : (
                        <>
                            <div className="finish">
                                <div className="circle-ok"><i class="fa-solid fa-check"></i></div>
                            <h1>THANK YOU!</h1>
                            <p>We've added your card details</p>
                        </div>
                        <input type="button" value="Continue" id="confirm" onClick={onFinish}/>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default MainContainerCard;