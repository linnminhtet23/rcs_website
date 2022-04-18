import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import useTranslation from "next-translate/useTranslation";

function Hero() {
//   const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      if (index < 2) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    }, 5000);

    return () => clearInterval(intervalIndex);
  }, [index]);

  const subTitle =
    index === 0 ? (
      <h2
        data-aos="slide-left"
        data-aos-delay="70"
        data-aos-duration="2000"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {/* {t("home:hero_subtitle_1")} */}
        <br />
        {/* {t("home:hero_subtitle_2")} */}
      </h2>
    ) : index === 1 ? (
      <h2
        data-aos="slide-left"
        data-aos-delay="70"
        data-aos-duration="2000"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {/* {t("home:hero_subtitle_3")} */}
      </h2>
    ) : (
      <h2
        data-aos="slide-left"
        data-aos-delay="70"
        data-aos-duration="2000"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {/* {t("home:hero_subtitle_4")} */}
      </h2>
    );

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1
          data-aos="slide-right"
          data-aos-delay="70"
          data-aos-duration="2000"
          data-aos-easing="ease-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          REAL CODE SOLUTIONS
          <br />
          Innovate with technology!
        </h1>
        {subTitle}
      </div>
      <div className={[styles.x1, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x2, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x3, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x4, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x5, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x6, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x7, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x8, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x9, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x10, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x11, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x12, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x13, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x14, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
      <div className={[styles.x15, styles.circlecontainer].join(" ")}>
        <div className={[styles.circles, styles.circle4].join(" ")}></div>
        <div className={[styles.circles, styles.circle3].join(" ")}></div>
        <div className={[styles.circles, styles.circle2].join(" ")}></div>
        <div className={[styles.circles, styles.circle1].join(" ")}></div>
        <div className={[styles.circles, styles.circle0].join(" ")}></div>
      </div>
    </div>
  );
}

export default Hero;
