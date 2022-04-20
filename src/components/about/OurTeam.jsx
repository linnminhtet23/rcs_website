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
            src="/images/about/chan-myat-thu.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Chan Myat Thu</h3>
          <h3>General Manager</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/kaung-san-hein.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Kaung San Hein</h3>
          <h3>Web and Android Developer</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/linn-min-htet.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Linn Min Htet</h3>
          <h3>Web and Android Developer</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/Hein.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Khant Maw Hein</h3>
          <h3>Web and Android Developer</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/kayzin-maung.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Kay Zin Maung</h3>
          <h3>Web and Android Developer</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/sai-kaung-htet-naing.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Sai Kaung Htet Naing</h3>
          <h3>Graphic Designer</h3>
        </div>

        <div className={styles.member}>
          <img
            src="/images/about/nang-thuzar-win.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Nan Thuzar Win</h3>
          <h3>Marketing Coordinator</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/images/about/bobo.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Bo Bo Han Htet </h3>
          <h3>Marketing Staff</h3>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
