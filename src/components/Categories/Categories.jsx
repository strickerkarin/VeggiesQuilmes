import Styles from "./Styles.module.css";
import Button from "../Button/Button";


export default function Categories() {  

  return (
    <div className={Styles.Categories__container}>
      <div className={Styles.categories__imagen1}>
        <Button>Hamburguesas</Button>
      </div>
      <div className={Styles.categories__imagen2}>
        <Button>Empanadas</Button>
      </div>
      <div className={Styles.categories__imagen3}>
        <Button>Milanesas</Button>
      </div>
      <div className={Styles.categories__imagen4}>
        <Button>Panificados</Button>
      </div>
    </div>
  );
}
