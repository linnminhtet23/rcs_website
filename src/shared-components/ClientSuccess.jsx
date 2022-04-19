import { useState, useEffect, Fragment } from "react";

import styles from "./ClientSuccess.module.css";

function ClientSuccess({ items }) {
  const [slider, setSlider] = useState(items[0]);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    document.getElementById("slider").scrollLeft = scrollLeft;
  }, [scrollLeft]);

  useEffect(() => {
    setSlider(items[0]);
  }, [items]);

  const handleScrollLeft = () => {
    let currentLeft = document.getElementById("slider").scrollLeft;
    setScrollLeft(currentLeft - 180);
  };

  const handleScrollRight = () => {
    let currentLeft = document.getElementById("slider").scrollLeft;
    setScrollLeft(currentLeft + 180);
  };

  const handleThumbnail = (item) => {
    setSlider(item);
  };

  return (
    <div className={styles.container}>
      <h1>Client Success</h1>
      <div className={styles.slidecontainer}>
        <div className={styles.slideholder}>
          <div className={styles.imagecontainer}>
            <img
              src={slider.src}
              alt="Client Success"
              width={625}
              height={500}
            />
          </div>
          <div className={styles.textcontainer}>
            {slider.details.map((detail, index) => (
              <Fragment key={index}>
                <h2>{detail.title}</h2>
                <p>{detail.description}</p>
              </Fragment>
            ))}
          </div>
        </div>

        <div className={styles.sliderwrapper}>
          <div className={styles.arrow}>
            <img
              src="/images/client-success/arrow-left.png"
              alt="Arrow Left"
            //   layout="fill"
            //   objectFit="cover"
              onClick={handleScrollLeft}
            />
          </div>

          <div id="slider" className={styles.slider}>
            {items.map((item, index) => (
              <div
                key={index}
                className={
                  item.src === slider.src
                    ? [styles.thumbnail, styles.active].join(" ")
                    : styles.thumbnail
                }
              >
                <img
                  src={item.src}
                  alt="Client Success"
                //   layout="fill"
                //   objectFit="cover"
                  onClick={() => handleThumbnail(item)}
                />
              </div>
            ))}
          </div>

          <div className={styles.arrow}>
            <img
              src="/images/client-success/arrow-right.png"
              alt="Arrow Right"
            //   layout="fill"
            //   objectFit="cover"
              onClick={handleScrollRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSuccess;

// import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import styles from "./ClientSuccess.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// function ClientSuccess() {
//   return (
//     <div className={styles.container}>
//       <h1>Client Success</h1>
//       <Carousel
//         showThumbs={false}
//         infiniteLoop={true}
//         renderArrowPrev={(clickHandler, hasPrev, label) => {
//           return (
//             hasPrev && (
//               <span className="arrow-left" onClick={clickHandler}>
//                 <span>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </span>
//               </span>
//             )
//           );
//         }}
//         renderArrowNext={(clickHandler, hasNext, label) => {
//           return (
//             hasNext && (
//               <span className="arrow-right" onClick={clickHandler}>
//                 <span>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </span>
//               </span>
//             )
//           );
//         }}
//       >
//         <div className="slide-holder">
//           <div className="image-container">
//             <Image
//               src="/images/client-success/client-success-1.jpg"
//               alt="Client Success"
//               width={625}
//               height={500}
//             />
//           </div>
//           <div className="text-container">
//             <h2>Title 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <h2>Title 2</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <h2>Title 3</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>

//         <div className="slide-holder">
//           <div className="image-container">
//             <Image
//               src="/images/client-success/client-success-2.jpg"
//               alt="Client Success"
//               width={675}
//               height={500}
//             />
//           </div>
//           <div className="text-container">
//             <h2>Title 1</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <h2>Title 2</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <h2>Title 3</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// export default ClientSuccess;
