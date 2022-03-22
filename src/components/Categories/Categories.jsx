import Styles from "./Styles.module.css";
import Category from "./Category/Category";

export default function Categories() {
  const categories = [
    <Category
      name="Hamburguesas"
      url="../../../div/Hamburguesas.png"
    ></Category>,
    <Category name="Empanadas" url="../../../div/Empanadas.png"></Category>,
    <Category
      name="Milasesas de Soja"
      url="../../../div/MilanesasSoja.png"
    ></Category>,
    <Category name="Panificados" url="../../../div/Panificados.png"></Category>,
  ];

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
