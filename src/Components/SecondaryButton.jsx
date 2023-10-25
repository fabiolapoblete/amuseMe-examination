import "../Styles/SecondaryButton.css";
import { motion } from "framer-motion";

function SecondaryButton({ title, action }) {
  return (
    <motion.button
      className="secondaryButton"
      onClick={action}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      {title}
    </motion.button>
  );
}

export default SecondaryButton;
