import { AnimatePresence } from "framer-motion";
import LandingPage from "../Pages/LandingPage";
import TicketPage from "../Pages/TicketPage";
import CheckoutPage from "../Pages/CheckoutPage";
import ConfirmationPage from "../Pages/ConfirmationPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
