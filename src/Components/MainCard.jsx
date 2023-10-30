import "../Styles/MainCard.css";

function MainCard({ title, desc, fullDesc }) {
  return (
    <article>
      <section className="mainCard__inner">
        <aside className="mainCard__fullDesc">
          <p className="mainCard__fullDesc--text">{fullDesc}</p>
        </aside>
        <header className="mainCard__header">
          <h3>{title}</h3>
          <p>{desc}</p>
        </header>
      </section>
    </article>
  );
}

export default MainCard;
