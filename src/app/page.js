import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>     
        {/* <div>
            <Image
              src="/img/logo.png"
              alt="BeeUtiful logo"
              width={200}
              height={200}
              priority
            />
        
        </div> */}
      </div>

      <div className={styles.principal}>
      <a
          href="#"
          className={styles.card}
         
         
        >
          <h1 className={styles.logoName}>
        BeeUtiful <span>-&gt;</span>
          </h1>
          <h3 className={styles.slogan}>Be U, Beautiful 🐝❤️</h3>
        </a>
       
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blusas <span>-&gt;</span>
          </h2>
          <p>Clique para ver mais dessa seção!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Vestidos <span>-&gt;</span>
          </h2>
          <p>Clique para ver mais dessa seção!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Calças <span>-&gt;</span>
          </h2>
          <p>Clique para ver mais dessa seção!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Calçados <span>-&gt;</span>
          </h2>
          <p>
          Clique para ver mais dessa seção!
          </p>
        </a>
      </div>
    </main>
  );
}
