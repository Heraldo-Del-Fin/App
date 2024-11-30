import React from 'react';
import styles from "./Banner.module.css";
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
/>

const Banner = ({ img }) => {
  return (
    <section className={styles.cardBanner} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.content}>
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          officia, voluptas aspernatur possimus unde laborum ad sed
          perferendis doloribus autem.
        </p>
        <button className={styles.btn}>
          Learn More <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Banner;