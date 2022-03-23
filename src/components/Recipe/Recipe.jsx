import Styles from "./Styles.module.css";
import Button from "../Button/Button";

export default function Recipe({ img, title, description }) {
  return (
    <div className={Styles.recipe__container}>
      <div className={Styles.recipe__img}></div>
      <p className={Styles.recipe__title}>{title}</p>
      <p className={Styles.recipe__description}>{description}</p>
      <Button>Ver Receta</Button>
    </div>
  );
}

/* url(${img}) */
