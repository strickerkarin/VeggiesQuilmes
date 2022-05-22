import Styles from "./Styles.module.css";

export default function Header() {
  return (
    <header className={Styles.header__container}>
      <div className={Styles.header__bottomBox}>
        <div>
          <h2>Tienda online de;</h2>
          <h2>alimentos saludables</h2>
          <h2>y naturales</h2>
          <div className={Styles.header__marquee}>
            <span className={Styles.header__innerMarquee}>
              Tienda online de alimentos saludables y naturales.                      
            </span>
          </div>
        </div>
        <div className={Styles.header__logo}></div>
        <div className={Styles.header__aboutMe}>Acerca de mí</div>
      </div>
      <h1 className={Styles.header__title}>¡Queremos ser parte de tu mesa!</h1>
    </header>
  );
}
