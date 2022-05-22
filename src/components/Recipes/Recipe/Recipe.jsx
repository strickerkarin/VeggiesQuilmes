import Styles from "./Styles.module.css";
import Button from "../../Button/Button";

export default function Recipe({ title, description }) {
  return (
    <div className={Styles.recipe__container}>
      <p className={`${Styles.recipe__title} ${Styles.recipe__line_clamp}` }>{title}</p>
      <p className={`${Styles.recipe__description} ${Styles.recipe__line_clamp}`}>{description}</p>

      <div className={Styles.recipe__buttonContainer}>
        <Button>Ver Receta</Button>
      </div>
    </div>
  );
}

//
