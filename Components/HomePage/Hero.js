import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <header id="home">
      <div className={styles.hero}>
        <div className={styles.heroBanner}>
          <h1>Window And Glass Repairs</h1>
          <p>
            We Provide Professional, Quick, and Affordable Services Throughout
            the Greater Toronto Area. Window and Glass Instalations,
            Maintainace, Repairs and Much More...
          </p>
          <a
            href="tel:6475317570"
            className={`${styles.heroBtn} btn scroll-link`}
          >
            {" "}
            Call Us Today!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
