import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../App";
import { motion } from "framer-motion";
import SecondaryTitle from "../Components/SecondaryTitle";
import "../Styles/CheckoutPage.css";

//Logic for calculating current date
const date = new Date();
let currentDay = String(date.getDate()).padStart(2, "0");
let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
let currentYear = date.getFullYear();
let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

function CheckoutPage() {
  //Navigating back to ticket page and navigation to confirmation page
  const navigate = useNavigate();

  const backOnClick = () => {
    navigate("/tickets");
  };

  const handleClick = () => {
    navigate("/confirmation");
  };

  //State and logic for number of tickets and ticket price
  const [
    totalChildTickets,
    totalAdultTickets,
    setTotalAdultTickets,
    setTotalChildTickets,
  ] = useContext(dataContext);

  const [totalTicketPrice, setTotalTicketPrice] = useState(0);

  const adultPrice = 495;
  const childPrice = 295;

  const incrementAdult = () => {
    setTotalAdultTickets((prevTotalAdultTickets) => prevTotalAdultTickets + 1);
  };

  const incrementChild = () => {
    setTotalChildTickets((prevTotalChildTickets) => prevTotalChildTickets + 1);
  };

  const decrementAdult = () => {
    totalAdultTickets > 0 &&
      setTotalAdultTickets(
        (prevTotalAdultTickets) => prevTotalAdultTickets - 1
      );
  };

  const decrementChild = () => {
    totalChildTickets > 0 &&
      setTotalChildTickets(
        (prevTotalChildTickets) => prevTotalChildTickets - 1
      );
  };

  //Each time total adult/child tickets is changes the total ticket price is updated
  useEffect(() => {
    const adultTotalPrice = totalAdultTickets * adultPrice;
    const childTotalPrice = totalChildTickets * childPrice;
    setTotalTicketPrice(adultTotalPrice + childTotalPrice);
    setPopEffect(true);
  }, [totalAdultTickets, totalChildTickets]);

  //Animation for total price
  const [popEffect, setPopEffect] = useState(false);

  const popVariants = {
    pop: { scale: 1.1, transition: { duration: 0.3 } },
  };

  //The popEffect is triggered when the price is triggered
  useEffect(() => {
    if (popEffect) {
      const timer = setTimeout(() => {
        setPopEffect(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [popEffect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="wrapper"
    >
      <header className="header">
        <motion.i
          whileHover={{ scale: 1.1, x: -10 }}
          onClick={backOnClick}
          className="fa fa-mail-reply"
        ></motion.i>
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
                  <motion.button
                    className={`button roundButton ${
                      totalAdultTickets === 0 ? "disabledButton" : ""
                    }`}
                    onClick={decrementAdult}
                    disabled={totalAdultTickets == 0}
                    whileHover={{ scale: 0.9 }}
                  >
                    -
                  </motion.button>
                  <h4>{totalAdultTickets}</h4>
                  <motion.button
                    className="button roundButton"
                    onClick={incrementAdult}
                    whileHover={{ scale: 1.1 }}
                  >
                    +
                  </motion.button>
                </div>
              </li>
              <li className="ticketPicker__type">
                <div>
                  <h3>Barn</h3>
                  <p>3-12 år</p>
                </div>

                <div className="ticketPicker__button">
                  <motion.button
                    className={`button roundButton ${
                      totalChildTickets === 0 ? "disabledButton" : ""
                    }`}
                    onClick={decrementChild}
                    disabled={totalChildTickets == 0}
                    whileHover={{ scale: 0.9 }}
                  >
                    -
                  </motion.button>
                  <h4>{totalChildTickets}</h4>
                  <motion.button
                    className="button roundButton"
                    onClick={incrementChild}
                    whileHover={{ scale: 1.1 }}
                  >
                    +
                  </motion.button>
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
          <motion.button
            className={`button payButton ${
              totalTicketPrice == 0 ? "disabledButton" : ""
            }`}
            disabled={totalTicketPrice == 0}
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
          >
            Betala
          </motion.button>
        </section>
      </main>
    </motion.div>
  );
}

export default CheckoutPage;
