import SecondaryTitle from "../Components/SecondaryTitle";
import { useNavigate } from "react-router-dom";
import TicketCard from "../Components/TicketCard";
import "../Styles/TicketPage.css";
import { motion } from "framer-motion";

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
      className="wrapper"
    >
      <header className="header">
        <motion.i
          whileHover={{ scale: 1.1, x: -10 }}
          onClick={backOnClick}
          className="fa fa-mail-reply"
        ></motion.i>
        <SecondaryTitle title={"Äventyret börjar nu!"} />
      </header>
      <main>
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
