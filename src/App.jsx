import { BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import "./App.css";

export const dataContext = createContext();

function App() {
  const [totalChildTickets, setTotalChildTickets] = useState(0);
  const [totalAdultTickets, setTotalAdultTickets] = useState(0);
  return (
    <dataContext.Provider
      value={[
        totalChildTickets,
        totalAdultTickets,
        setTotalAdultTickets,
        setTotalChildTickets,
      ]}
    >
      <Router>
        <div className="wrapperContainer">
          <AnimatedRoutes />
        </div>
      </Router>
    </dataContext.Provider>
  );
}

export default App;
