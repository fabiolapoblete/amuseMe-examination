import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SecondaryTitle from "../Components/SecondaryTitle";
import TicketCard from "../Components/TicketCard";
import "../Styles/TicketPage.css";

function TicketPage() {
  const navigate = useNavigate();

  const backOnClick = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="ticketPageWrapper"
    >
      <header className="header">
        <motion.i
          whileHover={{ scale: 1.1, x: -10 }}
          onClick={backOnClick}
          className="fa fa-mail-reply"
        ></motion.i>
        <SecondaryTitle title={"Äventyret börjar nu!"} />
      </header>
      <main className="ticketCards">
        <TicketCard
          title={"Entré"}
          desc={"Entré och fria åk"}
          action={handleClick}
        />
        <TicketCard
          title={"Halloween"}
          desc={"Är du redo för ett rysmysigt äventyr?"}
        />
        <TicketCard title={"Matpaket"} desc={"Fria måltider i hela parken"} />
      </main>
    </motion.div>
  );
}

export default TicketPage;
