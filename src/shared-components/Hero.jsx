import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero({ path, miniPath }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      setWidth(typeof window !== undefined && window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  let src = width > 1200 ? path : miniPath;

  return (
    <div className={styles.container}>
      <img
        alt="Product"
        src={src}
        // layout="fill"
        // objectFit="cover"
        className={styles.image}
      />
    </div>
  );
}

export default Hero;
