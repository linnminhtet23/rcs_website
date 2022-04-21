
import styles from "./PostCard.module.css";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

function PostCard({ title, content, imageUrl, date, detailPageUrl }) {
  const previewContent = `${content.substring(0, 110)}...`;
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} width={450} height={148} />

      <div className={styles.textcontainer}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{date}</span>
      </div>

      <div className="paragraphfont">
        <ReactMarkdown>{previewContent}</ReactMarkdown>
      </div>

      <Link to={detailPageUrl}>
        <button className={styles.readmore}>read more</button>
      </Link>
    </div>
  );
}

export default PostCard;
