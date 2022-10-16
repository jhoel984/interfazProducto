import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/colgate.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Colgate Total 12 Professional Aliento Saludable Dentífrico 70g</h1>
      <span className={styles.price}>$9,90</span>
      <p className={styles.desc}>
      Colgate Total 12 Professional Healthy Breath Pasta de dientes 70g Colgate Total 12 Healthy Breath Toothpaste es una crema para el cuidado bucal que previene la caries y asegura un blanqueamiento perfecto..
      </p>
    </div>
    
  );
};

export default PizzaCard;
