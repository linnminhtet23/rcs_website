import styles from "./TechnologiesWeUse.module.css";

function TechnologiesWeUse() {
  return (
    <div className={styles.container}>
      <h1>Technologies We Use</h1>
      <div className={styles.technologiescontainer}>
        <div className={styles.image}>
          <img
            src="/images/technologies/html.svg"
            alt="HTML"
            width={46}
            height={61}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/css.svg"
            alt="CSS"
            width={46}
            height={61}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/sass.svg"
            alt="SASS"
            width={46}
            height={61}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/js.svg"
            alt="Javascript"
            width={46}
            height={61}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/reactjs.svg"
            alt="Reactjs"
            width={80}
            height={100}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/nextjs.svg"
            alt="Nextjs"
            width={80}
            height={100}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/strapi.svg"
            alt="Strapi"
            width={80}
            height={100}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/nodejs.svg"
            alt="Nodejs"
            width={100}
            height={80}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/ruby.svg"
            alt="Ruby"
            width={100}
            height={80}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/ruby-on-rails.svg"
            alt="Ruby on Rails"
            width={100}
            height={80}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/flutter.svg"
            alt="Flutter"
            width={100}
            height={70}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/mysql.svg"
            alt="MySQL"
            width={100}
            height={70}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/postgresql.svg"
            alt="Postgresql"
            width={100}
            height={70}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/mongodb.svg"
            alt="Mongodb"
            width={100}
            height={70}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/sqlite.svg"
            alt="Sqlite"
            width={100}
            height={70}
          />
        </div>
        <div className={styles.image}>
          <img
            src="/images/technologies/graphql.svg"
            alt="Graphql"
            width={100}
            height={70}
          />
        </div>
      </div>
    </div>
  );
}

export default TechnologiesWeUse;
