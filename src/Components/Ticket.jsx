import "../Styles/Ticket.css";
import { easeInOut, motion } from "framer-motion";

function Ticket({ ticketType, ticketNumber }) {
  return (
    <motion.article
      className="ticket"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
      transition={{
        duration: 5,
        type: "spring",
        ease: easeInOut,
      }}
    >
      <section className="ticket__type">
        <h3>{ticketType}</h3>
      </section>
      <section className="ticket__info">
        <p>Ingång A</p>
      </section>
      <section className="ticket__barcode">
        <img
          src="/barcode.png"
          alt="Scannable barcode representing your ticket"
        />
        <p># {ticketNumber}</p>
      </section>
    </motion.article>
  );
}

export default Ticket;
