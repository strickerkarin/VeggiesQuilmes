import Styles from "./Styles.module.css";

export default function Header() {
  return (
    <header className={Styles.header__container}>
      <div className={Styles.header__bottomBox}>
        <div>
          <h2>Tienda online de</h2>
          <h2>alimentos saludables</h2>
          <h2>y naturales</h2>
        </div>
        <div className={Styles.header__logo}></div>
        <div className={Styles.header__aboutUs}>Acerca de nosotros</div>
      </div>
      <h1 className={Styles.header__title}>
        "Haz de tu alimentación tu mejor medicina"  <span> Hipócrates</span>
      </h1>
    </header>
  );
}
