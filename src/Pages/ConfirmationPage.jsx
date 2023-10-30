import { useContext } from "react";
import { dataContext } from "../App";
import { motion } from "framer-motion";
import SecondaryTitle from "../Components/SecondaryTitle";
import Ticket from "../Components/Ticket";
import Balloons from "../Components/Balloons";
import "../Styles/ConfirmationPage.css";

function ConfirmationPage() {
  const [totalChildTickets, totalAdultTickets] = useContext(dataContext);

  const adultPrice = 495;
  const childPrice = 295;

  let totalTicketPrice =
    totalAdultTickets * adultPrice + totalChildTickets * childPrice;

  const adultTickets = Array.from(
    { length: totalAdultTickets },
    (_, index) => index + 1
  );

  const childTickets = Array.from(
    { length: totalChildTickets },
    (_, index) => index + 1
  );

  const generateRandomTicketNumber = () => {
    const randomTicketNumber = Math.floor(1000 + Math.random() * 9000);

    return randomTicketNumber;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="wrapper"
    >
      <header>
        <SecondaryTitle title={"Bekräftelse"} />
      </header>
      <main>
        <section className="summary">
          <article className="summary__amount">
            <h4>Vuxen</h4>
            <h4>{totalAdultTickets}</h4>
          </article>
          <article className="summary__amount">
            <h4>Barn</h4>
            <h4>{totalChildTickets}</h4>
          </article>
          <article className="summary__amount summary__totalAmount">
            <h4>Totalt</h4>
            <h4>{totalTicketPrice} sek</h4>
          </article>
        </section>
        <section className="tickets__wrapper">
          <header>
            <h2>Biljetter</h2>
          </header>
          <section className="tickets__container">
            <section className="tickets">
              {adultTickets.map((ticketNumber) => (
                <Ticket
                  key={ticketNumber}
                  ticketType={"Vuxen"}
                  ticketNumber={generateRandomTicketNumber()}
                />
              ))}
            </section>
            <section className=" tickets">
              {childTickets.map((ticketNumber) => (
                <Ticket
                  key={ticketNumber}
                  ticketType={"Barn"}
                  ticketNumber={generateRandomTicketNumber()}
                />
              ))}
            </section>
          </section>
        </section>
      </main>
      <Balloons />
    </motion.div>
  );
}

export default ConfirmationPage;
