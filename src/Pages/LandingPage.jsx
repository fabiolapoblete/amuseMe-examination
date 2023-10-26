import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Bubbles from "../Components/Bubbles";
import Menu from "../Components/Menu";
import MainTitle from "../Components/MainTitle";
import PrimaryButton from "../Components/PrimaryButton";
import MainCard from "../Components/MainCard";
import "../Styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tickets");
  };

  return (
    <div className="wrapper">
      <Bubbles />
      <header className="header">
        <Menu />
        <MainTitle title={"Välkommen till AmuseMe!"} />
      </header>

      <motion.main
        className="main__container"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 15,
          duration: 5,
          ease: "linear",
          type: "spring",
          damping: 10,
          stiffness: 50,
        }}
      >
        <PrimaryButton action={handleClick} title={"Biljetter"} />

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
      </motion.main>
    </div>
  );
}

export default LandingPage;
