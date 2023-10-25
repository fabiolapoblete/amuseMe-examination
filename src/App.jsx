import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { createContext } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./Pages/LandingPage";
import TicketPage from "./Pages/TicketPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ConfirmationPage from "./Pages/ConfirmationPage";

export const dataContext = createContext();

function App() {
  return (
    <dataContext.Provider>
      <Router>
        <AnimatePresence
          onExitComplete={() => window.scrollTo(0, 0)}
          mode="wait"
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tickets" element={<TicketPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </dataContext.Provider>
  );
}

export default App;
