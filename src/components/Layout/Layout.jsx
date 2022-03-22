import Styles from "./Styles.module.css";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainImage from "../MainImage/MainImage";
import Navigation from "../Navigation/Navigation";
import Categories from "../Categories/Categories";

export default function Layout() {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <div className={Styles.layout__delimiter}>
      <div className={Styles.layout__header}>
        <Header />
      </div>
      <div className={Styles.layout__navigation}>
        <Navigation />
      </div>
      <main>
      <div className={Styles.layout__mainImage}>
        <MainImage />
      </div>      
      <div className={Styles.layout__categories}>        
        <Categories />
      </div>

      </main>
      <div className={Styles.layout__footer}>
        <Footer showBurger={showBurger} />
      </div>
    </div>
  );
}
