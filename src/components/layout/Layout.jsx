import { useState, useEffect } from "react";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Visitors from "../../share-components/Visitors";

const VISITORS_KEY = "rcs-website-visitors";

const increaseVisitors = async () => {
  const visitors = localStorage.getItem(VISITORS_KEY);

  if (!visitors) {
    try {
      const res = await fetch("/api/visitors", {
        method: "POST",
        headers: {
          Authorization: "rcs-website-secret-token",
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        const data = await res.json();
        localStorage.setItem(VISITORS_KEY, data.visitors);
      }
    } catch (error) {}
  }
};

function Layout(props) {
  const [visible, setVisible] = useState(false);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      document.removeEventListener("scroll", toggleVisible);
    };
  }, [visible]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        setVisitors(data.visitors);
      } catch (error) {}
    };

    increaseVisitors();
    fetchVisitors();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <NavigationMenu />
      {props.children}
      <Footer />
      <Visitors visitors={visitors} />
      <span
        className="scroll-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <span>
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </span>
    </div>
  );
}

export default Layout;
