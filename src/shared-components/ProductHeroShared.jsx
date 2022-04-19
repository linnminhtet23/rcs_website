import styles from "./ProductHeroShared.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProductHeroShared({ featuredProducts }) {
  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(clickHandler, hasPrev, label) => {
          return (
            hasPrev && (
              <span className="arrow-left" onClick={clickHandler}>
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </span>
            )
          );
        }}
        renderArrowNext={(clickHandler, hasNext, label) => {
          return (
            hasNext && (
              <span className="arrow-right" onClick={clickHandler}>
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </span>
            )
          );
        }}
      >
        {featuredProducts.map((featuredProduct) => (
          <div
            key={featuredProduct.id}
            style={{
              backgroundImage: `url(${featuredProduct.image})`,
            }}
            className={styles.slidercontainer}
          >
            <div className={styles.textcontainer}>
              <h2>{featuredProduct.name}</h2>
              <p className="paragraphfont">{featuredProduct.about}</p>
              {/* <Link href={`/products/${featuredProduct.id}`}> */}
                <a className={styles.btn}>Buy Now</a>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductHeroShared;
