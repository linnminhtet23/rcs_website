import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
// import { useRouter } from "next/router";

const options = [
  <>
    <img
      src="/images/home/lang-eng.jpg"
      alt="English"
      width={30}
      height={20}
    />
    <span>English</span>
  </>,
  <>
    <img
      src="/images/home/lang-myan.png"
      alt="Myanmar"
      width={30}
      height={20}
    />
    <span>Myanmar</span>
  </>,
];

function Footer() {
  // const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState();

  // useEffect(() => {
  //   const index = router.locales.indexOf(router.locale);
  //   setSelected(options[index]);
  // }, [router.locale, router.locales]);

  const handleIsActive = () => setIsActive(!isActive);

  return (
    <div className={styles.container}>
      <div className={styles.contactcontainer}>
        <div className={styles.addresscontainer}>
          <h4>RCS</h4>
          <p>
            No.24, 1st Floor, Kant Kaw Street, Between 22nd x 23rd Streets,
            Between 88th x 89th Streets, Aung Myay Thar Zan Township, Mandalay
          </p>
        </div>
        <div className={styles.socialcontainer}>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> 09 799501600
          </p>
          <p>
            {/* <Link href="https://mail.google.com"> */}
              <a target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                rcs.mdy@gmail.com
              </a>
            {/* </Link> */}
          </p>
          <p>
            {/* <Link href="https://www.facebook.com/RealCodeSolutions"> */}
              <a target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
              </a>
            {/* </Link> */}
          </p>
        </div>
      </div>
      <div className={styles.aboutcontainer}>
        <div className={styles.support}>
          <h4>Support</h4>
          <p>
            {/* <Link href="/help"> */}
              <a>Help</a>
            {/* </Link> */}
          </p>
          <p>
            {/* <Link href="/contact-us"> */}
              <a>Contact Us</a>
            {/* </Link> */}
          </p>
        </div>
        <div className={styles.team}>
          <h4>Team</h4>
          <p>
            {/* <Link href="/about"> */}
              <a>Members</a>
            {/* </Link> */}
          </p>
          {/* <p>
            <Link href="/news">
              <a>News</a>
            </Link>
          </p>
          <p>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </p> */}
        </div>
        <div className={styles.terms}>
          <h4>Terms & Policies</h4>
          <p>
            {/* <Link href="/terms-and-conditions"> */}
              <a>Terms of Uses</a>
            {/* </Link> */}
          </p>
          <p>
            {/* <Link href="/privacy-policy"> */}
              <a>Privacy Policy</a>
            {/* </Link> */}
          </p>
        </div>
        <div className={styles.dropdown} onClick={handleIsActive}>
          <div className={styles.dropdownbtn}>
            {selected}
            <span>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
          {isActive && (
            <div className={styles.dropdowncontent}>
              {options.map((option, index) => (
                // <Link
                //   key={index}
                //   href={router.asPath}
                //   locale={router.locales[index]}
                // >
                  <a>
                    <div
                      className={styles.dropdownitem}
                      onClick={() => {
                        setSelected(option);
                        setIsActive(false);
                      }}
                    >
                      {option}
                    </div>
                  </a>
                // </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; 2021 Real Code Solution. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
