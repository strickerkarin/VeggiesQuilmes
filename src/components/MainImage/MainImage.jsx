import Styles from "./Styles.module.css";

export default function MainImage() {
  return (
    <div className={Styles.mainImage__container}>
      <div className={Styles.mainImage__canva}>      
        <p className={Styles.mainImage__text}>¡Conocé nuestra variedad de productos y elegí lo que estás buscando!</p>
      </div>
    </div>
  );
}
