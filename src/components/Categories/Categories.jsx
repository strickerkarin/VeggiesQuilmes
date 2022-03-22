import Styles from "./Styles.module.css";


export default function Categories() {  

  return (
    <div className={Styles.Categories__container}>
      <div className={Styles.categories__imagen1}>
        <div className={Styles.categories__button}>Hamburguesas</div>
      </div>
      <div className={Styles.categories__imagen2}>
        <div className={Styles.categories__button}>Empanadas</div>
      </div>
      <div className={Styles.categories__imagen3}>
        <div className={Styles.categories__button}>Milanesas</div>
      </div>
      <div className={Styles.categories__imagen4}>
        <div className={Styles.categories__button}>Panificados</div>
      </div>
    </div>
  );
}
