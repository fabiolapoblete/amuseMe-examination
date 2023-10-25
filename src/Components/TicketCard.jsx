import SecondaryButton from "./SecondaryButton";
import "../Styles/TicketCard.css";
import { motion } from "framer-motion";

function TicketCard({ title, desc, action }) {
  return (
    <motion.article
      className="ticketCard"
      whileHover={{
        rotate: -20,
        transition: { ease: "anticipate", duration: 2 },
      }}
    >
      <h3 className="ticketCard__title">{title}</h3>
      <p className="ticketCard__desc">{desc}</p>
      <SecondaryButton action={action} title={"Köp här"} />
    </motion.article>
  );
}

export default TicketCard;
