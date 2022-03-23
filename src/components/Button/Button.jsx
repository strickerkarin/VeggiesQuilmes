import Styles from "./Styles.module.css";

export default function Button({children}) {

  return (
    <div className={Styles.button__container}>
      <p className={Styles.button__text}>{children}</p>
    </div>
  );
}
