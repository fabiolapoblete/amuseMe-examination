import { useContext } from "react";
import { dataContext } from "../App";
import SecondaryTitle from "../Components/SecondaryTitle";

function ConfirmationPage() {
  const [totalChildTickets, totalAdultTickets] = useContext(dataContext);

  return (
    <div className="wrapper">
      <header>
        <SecondaryTitle title={"Bekräftelse"} />
      </header>
      <main>
        <div className="amount">
          <h4>Vuxen</h4>
          <h4>{totalAdultTickets}</h4>
        </div>
        <div className="amount">
          <h4>Barn</h4>
          <h4>{totalChildTickets}</h4>
        </div>
      </main>
    </div>
  );
}

export default ConfirmationPage;
