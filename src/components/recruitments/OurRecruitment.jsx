import styles from "./OurRecruitment.module.css";
import urlBuilder from "../../lib/imageUrl";
import { formatDate } from "../../lib/formatDate";
import PostCard from "../../shared-components/PostCard";

function OurRecruitment({ items, error }) {
  const postCard =
    items &&
    items.map((item) => (
      <PostCard
        key={item.id}
        title={item.title}
        content={item.content}
        imageUrl={urlBuilder(item.image.url)}
        date={formatDate(item.created_at)}
        detailPageUrl={`/blogs/${item.id.toString()}`}
      />
    ));

  const recruitments =
    items && items.length > 0 ? (
      postCard
    ) : (
      <h1 className={styles.erroralert}>No recruitments posts yet!</h1>
    );

  return (
    <div className={styles.container}>
      <div className={styles.cardcontainer}>
        {error ? (
          <h1 className={styles.erroralert}>
            Something was wrong. Please, try later!
          </h1>
        ) : (
            recruitments
        )}
      </div>
    </div>
  );
}

export default OurRecruitment;
