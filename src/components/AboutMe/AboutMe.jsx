import Styles from "./Styles.module.css";
import Button from "../Button/Button";

export default function AboutMe() {
  return (
    <div className={Styles.aboutMe__container}>
      <div className={Styles.aboutMe__photo}></div>
      <h2>Acerca de mí</h2>
      <p className={Styles.aboutMe__description}>
        ¡Hola! Mi nombre es Carla, soy mamá y emprendedora. Este hermoso
        proyecto nació en el año 2019, diría que casi por casualidad, aunque
        sabemos que ellas no existen. Conocí un día las Veggies hamburguesas, un
        alimento basado en vegetales y legumbres, ricas, frescas, nutritivas,
        fáciles de cocinar y accesibles. Con el deseo de compartir esta delicia
        fue que nació veggies Quilmes, y es por eso que hoy... ¡Queremos ser
        parte de tu mesa!{" "}
      </p>
      <p className={Styles.aboutMe__description}>
        Te invito a que recorras la web y que conozcas nuestras Veggies y el
        resto de nuestras delicias totalmente caseras, elaboradas por nuestro
        chef profesional; también vas a encontrar recetas, tips y mucho más...
      </p>
      <p className={Styles.aboutMe__description}>¡Que la disfrutes!</p>
      <div className={Styles.aboutMe__button}></div>
      <div className={Styles.aboutMe__socialNetwork}></div>
      <Button>Ver Catálogo</Button> 
    </div>
  );
}
