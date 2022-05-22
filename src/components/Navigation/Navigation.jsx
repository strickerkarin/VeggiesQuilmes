import Styles from "./Styles.module.css";

export default function Navigation() {
  return (
   <nav className={Styles.navigation__container}>
        <ul>
            <li>comidas</li>
            <li>recetas</li>
            <li>tips</li>
            <li>reseñas</li>
            <li>contacto</li>
            <li className={Styles.navigation__aboutMe}>Acerca de mí</li>
        </ul>
   </nav>
  );
}
