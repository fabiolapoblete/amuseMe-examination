import { motion, AnimatePresence } from "framer-motion";
import MainTitle from "../Components/MainTitle";
import PrimaryButton from "../Components/PrimaryButton";
import Bubbles from "../Components/Bubbles";
import MainCard from "../Components/MainCard";
import "../Styles/LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tickets");
  };

  return (
    <div className="wrapper">
      <Bubbles />
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            // exit="exit"
          >
            <motion.div
              className="menu__item"
              onClick={handleClick}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
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
                className="balloon"
                src="../../public/hot-air-balloon.png"
                alt=""
              />
              <a href="">Köp biljetter</a>
            </motion.div>
            <motion.div
              className="menu__item"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
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
                className="balloon"
                src="../../public/hot-air-balloon.png"
                alt=""
              />
              <a href="">Öppetider</a>
            </motion.div>
            <motion.div
              className="menu__item"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
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
                className="balloon"
                src="../../public/hot-air-balloon.png"
                alt=""
              />
              <a href="">Attraktioner</a>
            </motion.div>
            <motion.div
              className="menu__item"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
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
                className="balloon"
                src="../../public/hot-air-balloon.png"
                alt=""
              />
              <a href="">Mat & Dryck</a>
            </motion.div>

            <motion.div
              className="menu__item"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
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
                className="balloon"
                src="../../public/hot-air-balloon.png"
                alt=""
              />
              <a href="">Evenemang</a>
            </motion.div>

            <motion.div
              className="menu__item"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
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
                className="balloon"
                src="../../public/hot-air-balloon.png"
                alt=""
              />
              <a href="">Kontakta oss</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="header">
        <div className="menu" onClick={() => setOpen(!open)}>
          {open ? (
            <i className="fa fa-close"></i>
          ) : (
            <i className="fa fa-bars" onClick={closeMenu}></i>
          )}
        </div>
        <MainTitle title={"Välkommen till AmuseMe!"} />
        <PrimaryButton action={handleClick} title={"Biljetter"} />
      </header>

      <main>
        <MainCard
          title={"Attraktioner"}
          desc={"Upplev alla våra hisnande attraktioner"}
          fullDesc={
            "Utforska en värld av adrenalinfyllda äventyr med vårt imponerande utbud av åkattraktioner. Oavsett om du är ute efter hisnande berg- och dalbanor, snurrande karuseller eller spännande vattenrutschbanor, kommer våra attraktioner att ge dig minnesvärda stunder av spänning och glädje."
          }
        />
        <MainCard
          title={"Halloweenpaket"}
          desc={"Ett rysligt kul besök i oktober-november"}
          fullDesc={
            "Snart är det dags för Halloween på AmuseMe! Ta med familjen och upplev en rysmysig park fylld med äventyr för både stora och små! Förra året sålde Halloweenpaketet slut innan halloween ens hade börjat, så passa på att säkra plats till höstens häftigaste upplevelse redan idag!"
          }
        />
        <MainCard
          title={"Restauranger"}
          desc={"Här finns smaker för alla, stora som små"}
          fullDesc={
            "På AmuseMe finns mat och dryck för alla smaker, med inspiration från världens alla hörn. Ät länge eller snabbt, grönt eller grillat, sött eller salt!"
          }
        />
        <MainCard
          title={"Evenemang"}
          desc={"Upplev magisk stämning med musik och dans"}
          fullDesc={
            "Upplev minnesvärda evenemang och festligheter hos oss. Oavsett om det är konserter, festivaler, konferenser eller speciella tillställningar, är våra evenemang en chans att fördjupa dina intressen, umgås med likasinnade och skapa oförglömliga ögonblick tillsammans med andra."
          }
        />
      </main>
    </div>
  );
}

export default LandingPage;
