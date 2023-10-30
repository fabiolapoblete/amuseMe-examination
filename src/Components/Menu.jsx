import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Menu.css";

function Menu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tickets");
  };

  const menuItem = {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <div className="menu--icon" onClick={() => setOpen(!open)}>
        {open ? (
          <i className="fa fa-close"></i>
        ) : (
          <i className="fa fa-bars" onClick={closeMenu}></i>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="menu__container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2,
              },
            }}
          >
            <motion.li
              className="menu__item"
              onClick={handleClick}
              variants={menuItem}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeInOut", delay: 1.3 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              <img
                className="menu__balloon"
                src="../../public/hot-air-balloon.png"
                alt="hot air balloon image"
              />
              <p>Köp biljetter</p>
            </motion.li>
            <motion.li
              className="menu__item"
              variants={menuItem}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeInOut", delay: 1.1 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              <img
                className="menu__balloon"
                src="../../public/hot-air-balloon.png"
                alt="hot air balloon image"
              />
              <p>Öppetider</p>
            </motion.li>
            <motion.li
              className="menu__item"
              variants={menuItem}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeInOut", delay: 0.9 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              <img
                className="menu__balloon"
                src="../../public/hot-air-balloon.png"
                alt="hot air balloon image"
              />
              <p>Attraktioner</p>
            </motion.li>
            <motion.li
              className="menu__item"
              variants={menuItem}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeInOut", delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              <img
                className="menu__balloon"
                src="../../public/hot-air-balloon.png"
                alt="hot air balloon image"
              />
              <p>Mat & Dryck</p>
            </motion.li>
            <motion.li
              className="menu__item"
              variants={menuItem}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeInOut", delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <img
                className="menu__balloon"
                src="../../public/hot-air-balloon.png"
                alt="hot air balloon image"
              />
              <p>Evenemang</p>
            </motion.li>
            <motion.li
              className="menu__item"
              variants={menuItem}
              initial="initial"
              animate="animate"
              transition={{ ease: "easeInOut", delay: 0.3 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.0,
                },
              }}
            >
              <img
                className="menu__balloon"
                src="../../public/hot-air-balloon.png"
                alt="hot air balloon image"
              />
              <p>Kontakta oss</p>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
