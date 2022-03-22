import Styles from "./Styles.module.css";

export default function Category(name, url) {
  return (
    <div className={Styles.category__container}>
      <img className={Styles.category_img} src={url} />
      <div className={Styles.category__button}>{name}</div>
    </div>
  );
}
