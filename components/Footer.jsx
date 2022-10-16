import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            EL DESPERDICIO DE ALIMENTOS ES UN PROBLEMA AMBIENTAL, QUE NECESITA DE NUESTRO APOYO. ¿VAMOS JUNTOS?
             .
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>SUCURSALES</h1>
          <p className={styles.text}>
            AV. BEIJING 1654 R. Don JUAN #304.
            <br /> CBBA, 85022
            <br /> (+591) 867-1010
          </p>
          <p className={styles.text}>
            AV. SEGUNDA 2356 K. Laquie Ustan #235.
            <br /> SCZ, 85022
            <br /> (+591) 867-1011
          </p>
          <p className={styles.text}>
            AV. HEROINAS 1614 E. Erwin St #104.
            <br /> CBBA, 85022
            <br /> (+591) 867-1012
          </p>
          <p className={styles.text}>
            AV. TOMATE 1614 W. Caroll St #125.
            <br /> CBBA, 85022
            <br /> (+591) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORARIO DE ATENCIÓN</h1>
          <p className={styles.text}>
            LUNES A VIERNES
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SABADO - DOMINGO
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
