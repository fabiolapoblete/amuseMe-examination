import { motion } from "framer-motion";
import MainTitle from "../Components/MainTitle";
import PrimaryButton from "../Components/PrimaryButton";
import Bubbles from "../Components/Bubbles";
import MainCard from "../Components/MainCard";
import "../Styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      <Bubbles />
      <header className="header">
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
        <MainCard title={"Restauranger"} desc={"Här finns smaker för alla"} />
        <MainCard
          title={"Evenemang"}
          desc={"Upplev magisk stämning med musik och dans"}
        />
      </main>
    </>
  );
}

export default LandingPage;
