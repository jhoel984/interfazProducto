import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/motorcycle-delivery-4448.png" alt="" width="100" height="100" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ENVIOS A DOMICILIO</div>
          <div className={styles.text}>REALIZE SU PEDIDO YA</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Inicio</li>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}></li>
          <Image src="/img/OnlyOfer.png" alt="" width="600px" height="600px" />
          <li className={styles.listItem}>Deliverys</li>
          <li className={styles.listItem}></li>
          <li className={styles.listItem}>Contacto</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
