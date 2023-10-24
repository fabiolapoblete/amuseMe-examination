import { motion } from "framer-motion";
import "../Styles/MainTitle.css";

function MainTitle({ title }) {
  return (
    <motion.h1
      className="mainTitle"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 10, duration: 5 }}
    >
      {title}
    </motion.h1>
  );
}

export default MainTitle;
