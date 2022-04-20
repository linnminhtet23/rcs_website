// import { useEffect } from "react";
// import Image from "next/image";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ image, name, descriptions, path }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img
          src={image}
          alt={name}

        //   layout="fill"
        //   objectFit="cover"
          className={styles.image}
        />
      </div>
      <h4>{name}</h4>
      <ul>
        {descriptions.slice(0, 4).map((des, index) => (
          <li key={index}>{des}</li>
        ))}
      </ul>
      {/* <Link href={path}> */}
      <Link to={path}>
        <a className={styles.btn}>Read More</a>
        </Link>
      {/* </Link> */}
    </div>
  );
}

export default Card;
