import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ReCAPTCHA_KEY } from "../../util";

function ContactForm() {
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
          "template_m4dtew3",
          event.target,
          "user_3sqplwTbhCGngVXj6bvox"
        )
        .then((response) => {
          setMessage("Our team have received your message.");
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
        <h2>Send us a message</h2>
        <p className="paragraphfont">
          You can contact us with anything related to our products. We’ll get in
          touch you as soon as possible.
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
          <div>
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <br />
          <div>
            <ReCAPTCHA ref={recaptchaRef} sitekey={ReCAPTCHA_KEY} />
          </div>
          <div className={styles.action}>
            <button>Send us</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
