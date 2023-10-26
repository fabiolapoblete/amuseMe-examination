import "../Styles/MainCard.css";
import { motion } from "framer-motion";

function MainCard({ title, desc, fullDesc }) {
  return (
    <motion.article
      className="mainCard"
      // initial={{ x: -500 }}
      // animate={{ x: 0 }}
      // transition={{
      //   delay: 15,
      //   duration: 5,
      //   ease: "linear",
      //   type: "spring",
      //   damping: 10,
      //   stiffness: 50,
      // }}
    >
      {/* <header className="mainCard__header">{title}</header>
      <section className="mainCard__desc">
        <p className="shortDesc">{desc}</p>
        <p className="fullDesc">{fullDesc}</p>
      </section> */}
      <section className="inner">
        <aside className="mainCard__fullDesc">
          <p className="fullDesc--text">{fullDesc}</p>
        </aside>
        <header className="mainCard__header">
          <h3>{title}</h3>
          <p>{desc}</p>
        </header>
      </section>
    </motion.article>
  );
}

export default MainCard;
