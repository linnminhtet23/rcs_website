import { useState } from "react";
import styles from "./NavigationMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function NavigationMenu() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownLinkClick, setDropdownLinkClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleDropdownLinkClick = () => {
    setDropdown(!dropdown);
  };

  const closeMobileMenu = () => {
    setClick(false);
    setDropdownLinkClick(false);
  };

  const onMouseEnter = () => setDropdown(true);

  const onMouseLeave = () => setDropdown(false);

  return (
    <nav className={styles.navbar}>
      {/* <Link href="/"> */}
        <a className={styles.navbarlogo}>
          <img
            src="/images/home/logo.png"
            alt="RCS"
            width={130}
            height={130}
          />
        </a>
      {/* </Link> */}
      <div className={styles.menuicon} onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </div>
      <ul
        className={
          click ? [styles.navmenu, styles.active].join(" ") : styles.navmenu
        }
      >
        <li className={styles.navitem}>
          {/* <Link href="/products"> */}
            <a className={styles.navlinks} onClick={closeMobileMenu}>
              Products
            </a>
          {/* </Link> */}
        </li>
        <li className={styles.navitem}>
          {/* <Link href="/services"> */}
            <a className={styles.navlinks} onClick={closeMobileMenu}>
              Services
            </a>
          {/* </Link> */}
        </li>
        <li className={styles.navitem}>
          {/* <Link href="/pricing"> */}
            <a className={styles.navlinks} onClick={closeMobileMenu}>
              Pricing
            </a>
          {/* </Link> */}
        </li>
        <li
          className={styles.navitem}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={handleDropdownLinkClick}
        >
          <a className={styles.navlinks} onClick={handleDropdownLinkClick}>
            Posts <FontAwesomeIcon icon={faCaretDown} />
          </a>

          {dropdown && (
            <ul
              onClick={handleDropdownLinkClick}
              className={
                dropdownLinkClick
                  ? [styles.dropdownmenu, styles.clicked].join(" ")
                  : styles.dropdownmenu
              }
            >
              <li>
                {/* <Link href="/news"> */}
                  <a className={styles.dropdownlink} onClick={closeMobileMenu}>
                    News
                  </a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/blogs"> */}
                  <a className={styles.dropdownlink} onClick={closeMobileMenu}>
                    Blogs
                  </a>
                {/* </Link> */}
              </li>
            </ul>
          )}
        </li>
        <li className={styles.navitem}>
          {/* <Link href="/about"> */}
            <a className={styles.navlinks} onClick={closeMobileMenu}>
              About
            </a>
          {/* </Link> */}
        </li>
        <li className={[styles.navitem, styles.mobilebtn].join(" ")}>
          {/* <Link href="/contact-us" passHref={true}> */}
            <button className={styles.btn} onClick={closeMobileMenu}>
              Contact Us
            </button>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
