import styles from "./OurClients.module.css";

function OurClients() {
  return (
    <div className={styles.container}>
      <h1>Our Clients</h1>
      <div className={styles.clientscontainer}>
        <div className={styles.image}>
          <img
            src="/images/clients/dkn.jpg"
            alt="dkn"
            width="85%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/galaxy.jpg"
            alt="galaxy"
            width="85%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/hp.png"
            alt="hp"
            width="85%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/joker.jpeg"
            alt="joker"
            width="70%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/m9.jpg"
            alt="m9"
            width={80}
            height={100}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/mymobile.png"
            alt="mymobile"
            width="70%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/nt.jpg"
            alt="nt"
            width="70%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/oamg.png"
            alt="oamg"
            width="60%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/organic.jpg"
            alt="organic"
            width="60%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/secondtap.jpg"
            alt="secondtap"
            width="60%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/syw.jpg"
            alt="syw"
            width="60%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/theicon.jpeg"
            alt="theicon"
            width="70%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/tknd.jpg"
            alt="tknd"
           width="60%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/tpg.png"
            alt="tpg"
            width="70%"
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/clients/yoon.jpg"
            alt="yoon"
            width="70%"
          />
        </div>
      </div>
    </div>
  );
}

export default OurClients;
