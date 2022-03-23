import Styles from "./Styles.module.css";
import Button from "../Button/Button";

export default function Recipe() {
  return (
    <div className={Styles.recipe__container}>
     
      <Button>Ver Receta</Button> 
    </div>
  );
}
