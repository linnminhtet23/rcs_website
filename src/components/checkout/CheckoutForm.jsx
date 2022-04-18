import { useRef, useState } from "react";
// import { useRouter } from "next/router";
import styles from "./CheckoutForm.module.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import useTranslation from "next-translate/useTranslation";
import { ReCAPTCHA_KEY } from "../../util";

function CheckoutForm() {
  // const { t } = useTranslation();

  // const router = useRouter();
  const formRef = useRef();
  const recaptchaRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = await recaptchaRef.current.getValue();

    if (token) {
      emailjs
        .sendForm(
          "service_o3sygxg",
          "template_tywswjj",
          event.target,
          "user_3sqplwTbhCGngVXj6bvox"
        )
        .then((response) => {
          setMessage("Our team have received your order.");
          formRef.current.reset();
        })
        .catch((error) => {
          setMessage("Something was wrong.Please send again!");
        });
    } else {
      setMessage("Please select, I'm not robot");
    }
  };

  const handleAlert = () => {
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h2>Send us you’re interested in our product or service </h2>
        <p className="paragraphfont">
          We’ll get in touch you as soon as possible.
        </p>
        {message && (
          <div className={styles.alert}>
            {message}
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.close}
              onClick={handleAlert}
            />
          </div>
        )}
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="order">Your Order Name</label>
            <input
              type="text"
              id="order"
              name="order"
              // defaultValue={router.query.order}
              readOnly
              required
            />
          </div>
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Your phone number</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <br />
          <div>
            <ReCAPTCHA ref={recaptchaRef} sitekey={ReCAPTCHA_KEY} />
          </div>
          <div className={styles.action}>
            <button>Order</button>
          </div>
        </form>
      </div>

      <div className={styles.textcontainer}>
        {/* <h2>{t("checkout:checkout_title")}</h2> */}
        {/* <p className="paragraphfont">{t("checkout:checkout_description")}</p> */}
      </div>
    </div>
  );
}

export default CheckoutForm;
