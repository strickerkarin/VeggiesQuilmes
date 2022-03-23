import Styles from "./Styles.module.css";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
  const recipes = [
    {
      img: "../../img/Receta1.png",
      title: "Hamburguesa de carne con queso y tomate",
      description: "Hamburguesa de carne con queso y tomate",
    },
    {
      img: "../../img/Receta2.png",
      title: "Hamburguesa de carne con queso y tomate",
      description: "Hamburguesa de carne con queso y tomate",
    },
    {
        img: "../../img/Receta3.png",
        title: "Hamburguesa de carne con queso y tomate",
        description: "Hamburguesa de carne con queso y tomate",
      },
      {
        img: "../../img/Receta4.png",
        title: "Hamburguesa de carne con queso y tomate",
        description: "Hamburguesa de carne con queso y tomate",
      },
  ];

  return (
    <div className={Styles.recipes__container}>
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          img={recipe.img}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </div>
  );
}
