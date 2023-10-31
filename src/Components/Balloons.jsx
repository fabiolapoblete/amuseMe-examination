import { motion } from "framer-motion";
import "../Styles/Balloons.css";

function Balloons() {
  const balloon = {
    initial: { y: "100vh" },
    animate: { y: "-200vh" },
    exit: { y: "-200vh" },
  };

  return (
    <div className="balloonWrapper">
      <motion.img
        className="balloon balloon__1"
        src="/hot-air-balloon.png"
        alt="hot air balloon image"
        variants={balloon}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        className="balloon balloon__2"
        src="/hot-air-balloon.png"
        alt="hot air balloon image"
        variants={balloon}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 1, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        className="balloon balloon__3"
        src="/hot-air-balloon.png"
        alt="hot air balloon image"
        variants={balloon}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.5, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        className="balloon balloon__4"
        src="/hot-air-balloon.png"
        alt="hot air balloon image"
        variants={balloon}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 1.5, duration: 10, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Balloons;
