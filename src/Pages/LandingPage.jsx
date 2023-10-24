import { motion, AnimatePresence } from "framer-motion";
import MainTitle from "../Components/MainTitle";
import PrimaryButton from "../Components/PrimaryButton";
import Bubbles from "../Components/Bubbles";
import MainCard from "../Components/MainCard";
import "../Styles/LandingPage.css";
import { useState } from "react";

function LandingPage() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
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
            exit="exit"
          >
            <div className="btn_close" onClick={closeMenu}>
              X
            </div>
            <motion.a
              href=""
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
              Köp biljetter
            </motion.a>
            <motion.a
              href=""
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
              Öppetider
            </motion.a>
            <motion.a
              href=""
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
              Attraktioner
            </motion.a>
            <motion.a
              href=""
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
              Mat & Dryck
            </motion.a>
            <motion.a
              href=""
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
              Evenemang
            </motion.a>
            <motion.a
              href=""
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
              Kontakta oss
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="header">
        <div className="menu" onClick={isOpen}>
          <i className="fa fa-bars"></i>
        </div>
        <MainTitle title={"Välkommen till AmuseMe!"} />
        <PrimaryButton title={"Biljetter"} />
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
