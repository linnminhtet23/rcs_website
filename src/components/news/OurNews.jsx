import PostCard from "../../shared-components/PostCard";
import styles from "./OurNews.module.css";
import urlBuilder from "../../lib/imageUrl";
import { formatDate } from "../../lib/formatDate";

function OurNews({ items, error }) {
  const postCard =
    items &&
    items.map((item) => (
      <PostCard
        key={item.id}
        title={item.title}
        content={item.content}
        imageUrl={urlBuilder(item.image.url)}
        date={formatDate(item.created_at)}
        detailPageUrl={`/news/${item.id.toString()}`}
      />
    ));

  const news =
    items && items.length > 0 ? (
      postCard
    ) : (
      <h1 className={styles.erroralert}>No new posts yet!</h1>
    );

  return (
    <div className={styles.container}>
      <div className={styles.cardcontainer}>
        {error ? (
          <h1 className={styles.erroralert}>
            Something was wrong. Please, try later!
          </h1>
        ) : (
          news
        )}
      </div>
    </div>
  );
}

export default OurNews;
