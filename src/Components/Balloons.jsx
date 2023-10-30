import { motion } from "framer-motion";
import "../Styles/Balloons.css";

function Balloons() {
  return (
    <div className="balloonWrapper">
      <motion.img
        className="balloon balloon__1"
        src="../../public/hot-air-balloon.png"
        alt="hot air balloon image"
        initial={{ y: "100vh" }}
        animate={{ y: "-100vh" }}
        exit={{ y: "-100vh" }}
        transition={{ delay: 0, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        className="balloon balloon__2"
        src="../../public/hot-air-balloon.png"
        alt="hot air balloon image"
        initial={{ y: "100vh" }}
        animate={{ y: "-100vh" }}
        exit={{ y: "-100vh" }}
        transition={{ delay: 1, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        className="balloon balloon__3"
        src="../../public/hot-air-balloon.png"
        alt="hot air balloon image"
        initial={{ y: "100vh" }}
        animate={{ y: "-100vh" }}
        exit={{ y: "-100vh" }}
        transition={{ delay: 0.5, duration: 10, ease: "easeInOut" }}
      />
      <motion.img
        className="balloon balloon__4"
        src="../../public/hot-air-balloon.png"
        alt="hot air balloon image"
        initial={{ y: "100vh" }}
        animate={{ y: "-100vh" }}
        exit={{ y: "-100vh" }}
        transition={{ delay: 1.5, duration: 10, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Balloons;
