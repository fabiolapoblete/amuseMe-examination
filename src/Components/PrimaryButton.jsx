import "../Styles/PrimaryButton.css";
import { motion, AnimatePresence } from "framer-motion";

function PrimaryButton({ title, action }) {
  return (
    <AnimatePresence>
      <motion.button
        className="primaryButton"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 15,
            duration: 0.3,
            ease: "linear",
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
            },
          },
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        onClick={action}
      >
        {title}
      </motion.button>
    </AnimatePresence>
  );
}

export default PrimaryButton;
