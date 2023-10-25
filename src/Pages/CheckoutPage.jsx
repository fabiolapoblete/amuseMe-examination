import SecondaryTitle from "../Components/SecondaryTitle";
import { useNavigate } from "react-router-dom";
import "../Styles/CheckoutPage.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const date = new Date();

let currentDay = String(date.getDate()).padStart(2, "0");
let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
let currentYear = date.getFullYear();
let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

function CheckoutPage() {
  const navigate = useNavigate();

  const backOnClick = () => {
    navigate("/tickets");
  };
  const adultPrice = 495;
  const childPrice = 295;

  const [totalAdultTickets, setTotalAdultTickets] = useState(0);
  const [totalChildTickets, setTotalChildTickets] = useState(0);
  const [totalTicketPrice, setTotalTicketPrice] = useState(0);

  const [popEffect, setPopEffect] = useState(false);

  const updateTicketPrice = () => {
    const adultTotalPrice = totalAdultTickets * adultPrice;
    const childTotalPrice = totalChildTickets * childPrice;
    setTotalTicketPrice(adultTotalPrice + childTotalPrice);
    setPopEffect(true);
  };

  const incrementAdult = () => {
    setTotalAdultTickets((prevTotalAdultTickets) => prevTotalAdultTickets + 1);
    updateTicketPrice();
  };

  const incrementChild = () => {
    setTotalChildTickets((prevTotalChildTickets) => prevTotalChildTickets + 1);
    updateTicketPrice();
  };

  const decrementAdult = () => {
    totalAdultTickets > 0 &&
      setTotalAdultTickets(
        (prevTotalAdultTickets) => prevTotalAdultTickets - 1
      );
    updateTicketPrice();
  };

  const decrementChild = () => {
    totalChildTickets > 0 &&
      setTotalChildTickets(
        (prevTotalChildTickets) => prevTotalChildTickets - 1
      );
    updateTicketPrice();
  };

  const popVariants = {
    pop: { scale: 1.1, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    if (popEffect) {
      const timer = setTimeout(() => {
        setPopEffect(false); // Återgå till ursprungsläget
      }, 300); // Tiden i millisekunder innan återgång
      return () => clearTimeout(timer);
    }
  }, [popEffect]);

  const handleClick = () => {
    navigate("/confirmation");
  };

  return (
    <div className="wrapper">
      <header className="header">
        <i onClick={backOnClick} className="fa fa-mail-reply"></i>
        <SecondaryTitle title={"Kassa"} />
      </header>
      <main>
        <section className="ticketInfo">
          <h3>Entrébiljetter</h3>
          <p>{currentDate}</p>
        </section>
        <section className="ticketQuantity">
          <article className="ticketPicker">
            <ul>
              <li className="ticketPicker__type">
                <div className="ticketPicker__desc">
                  <h3>Vuxen</h3>
                  <p>13 år+</p>
                </div>
                <div className="ticketPicker__button">
                  <button
                    onClick={decrementAdult}
                    disabled={totalAdultTickets === 0}
                    className={totalAdultTickets === 0 ? "disabled-button" : ""}
                  >
                    -
                  </button>
                  <h4>{totalAdultTickets}</h4>
                  <button onClick={incrementAdult}>+</button>
                </div>
              </li>
              <li className="ticketPicker__type">
                <div>
                  <h3>Barn</h3>
                  <p>3-12 år</p>
                </div>

                <div className="ticketPicker__button">
                  <button
                    onClick={decrementChild}
                    disabled={totalChildTickets === 0}
                    className={totalChildTickets === 0 ? "disabled-button" : ""}
                  >
                    -
                  </button>
                  <h4>{totalChildTickets}</h4>
                  <button onClick={incrementChild}>+</button>
                </div>
              </li>
            </ul>
          </article>
          <motion.article
            className="totalTicketPrice"
            variants={popVariants}
            animate={popEffect ? "pop" : ""}
            exit={{ scale: 1 }}
          >
            {totalTicketPrice} sek
          </motion.article>
          <button
            disabled={totalTicketPrice === 0}
            className={totalTicketPrice === 0 ? "disabled-button" : "payButton"}
            onClick={handleClick}
          >
            Betala
          </button>
        </section>
      </main>
    </div>
  );
}

export default CheckoutPage;
