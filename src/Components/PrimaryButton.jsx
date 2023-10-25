import "../Styles/PrimaryButton.css";
import { motion, AnimatePresence } from "framer-motion";

function PrimaryButton({ title, action }) {
  return (
    <AnimatePresence>
      <motion.button
        className="primaryButton"
        onClick={action}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.3,
            delay: 0,
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
      >
        {title}
      </motion.button>
    </AnimatePresence>
  );
}

export default PrimaryButton;
