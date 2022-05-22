import Styles from "./Styles.module.css";
import Recipe from "./Recipe/Recipe";

export default function Recipes() {
  /* const recipes = [
    {
      id: 1,
      img: "https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?size=626&ext=jpg",
      title: "Hamburguesa de carne con queso y tomate",
      description: "Hamburguesa de carne con queso y tomate",
    },
    {
      id: 2,
      img: "https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg?size=626&ext=jpg",
      title: "Hamburguesa de carne con queso y tomate",
      description: "Hamburguesa de carne con queso y tomate",
    },
    {
      id: 3,
      img: "receta1",
      title: "Hamburguesa de carne con queso y tomate",
      description: "Hamburguesa de carne con queso y tomate",
    },
    {
      id: 4,
      img: "receta1",
      title: "Hamburguesa de carne con queso y tomate",
      description: "Hamburguesa de carne con queso y tomate",
    },
  ]; */

  return (
    <div className={Styles.recipes__container}>
      <div className={Styles.recipes__recipe}>
        <div className={Styles.recipes__image1}></div>
        <Recipe title={"Ensalada de tofu, canónigos y nueces"} description={"Un preparado a base de soja que tiene muy buenas propiedades y que mezclado correctamente con frutos secos nos proporcionará una gama de sabores impresionantes. "} />
      </div>
      <div className={Styles.recipes__recipe}>
        <div className={Styles.recipes__image2}></div>
        <Recipe title={"Ensalada templada de lentejas"} description={"Las lentejas son una legumbre imprescindible para disfrutarse con una cantidad recomendable de verduras."} />
      </div>
      <div className={Styles.recipes__recipe}>
        <div className={Styles.recipes__image3}></div>
        <Recipe title={"Filetes de seitán en salsa de pimienta"} description={"Es un plato muy nutritivo, saludable y ligero; se puede combinar con otras salsas."} />
      </div>
      <div className={Styles.recipes__recipe}>
        <div className={Styles.recipes__image4}></div>
        <Recipe title={"Curry de garbanzos con mango"} description={"Una receta única con una variedad de sabores y con todos los beneficios de los garbanzos."} />
      </div>
    </div>
  );
}
