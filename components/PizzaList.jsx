import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COMA BIEN E BARATO Y AYUDE CONTRA EL DESPERDICIO</h1>
      <p className={styles.desc}>
        Alimentos de sus restaurantes, cafés, panaderias, mercados preferidos para consumo imediato
        disponibles al 60% de descuento.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;
