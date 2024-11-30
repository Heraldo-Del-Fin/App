import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm}>
        <label>
          <span>Name:</span>
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="Your email" />
        </label>
        <label>
          <span>Message:</span>
          <textarea placeholder="Your message" rows="5"></textarea>
        </label>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
