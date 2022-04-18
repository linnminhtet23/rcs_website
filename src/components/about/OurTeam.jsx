import styles from "./OurTeam.module.css";

function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team Members</h1>
      <div className={styles.membercontainer}>
        <div className={styles.member}>
          <img
            src="/images/about/phyu-hnin-wai.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Phyu Hnin Wai</h3>
          <h3>Director</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/soe-zayar.jpg"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Soe Zayar</h3>
          <h3>Senior Web and Android Developer</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/zin-wai-moe.jpg"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Zin Wai Moe</h3>
          <h3>General Manager</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/kaung-san-hein.jpg"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Kaung San Hein</h3>
          <h3>Web and Android Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
