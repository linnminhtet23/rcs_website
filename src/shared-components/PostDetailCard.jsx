// import Image from "next/image";
import styles from "./PostDetailCard.module.css";
import urlBuilder from "../lib/imageUrl";
import ReactMarkdown from "react-markdown";

function PostDetailCard({ item, error }) {
  return error ? null : (
    <div className={styles.container}>
      <div className={styles.detailcard}>
        <div className={styles.imagecontainer}>
          <img
            src={urlBuilder(item.detail_image.url)}
            alt={item.title}
            width={307}
            height={307}
          />
        </div>
        <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
          <ReactMarkdown children={item.content} />
        </div>
      </div>
    </div>
  );
}

export default PostDetailCard;
