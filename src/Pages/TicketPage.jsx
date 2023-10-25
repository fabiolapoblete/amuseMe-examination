import SecondaryTitle from "../Components/SecondaryTitle";
import { useNavigate } from "react-router-dom";
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
    <div className="wrapper">
      <header className="header">
        <i onClick={backOnClick} className="fa fa-mail-reply"></i>
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
    </div>
  );
}

export default TicketPage;
