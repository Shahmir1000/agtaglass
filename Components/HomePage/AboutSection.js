import Image from "next/image";
import aboutUs from "../../public/aboutUs.jpeg";
import Link from "next/link";
import styles from "../../styles/AboutSection.module.css";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="sectionTitle">
        <h2>
          about <span>US</span>
        </h2>
      </div>
      <div className={`sectionCenter ${styles.aboutCenter}`}>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}></div>
          <Image src={aboutUs} layout="responsive" alt="Window Carpenter" />
        </div>

        <article className={styles.aboutInfo}>
          <h3>Window and Glass Repair</h3>
          <p>
            We are a family owned business with many years of Experience in this
            trade. We care about our customers and it shows from the work we do
            to the prices we charge. Our company does free consolations, give us
            a call, we are happy to answer.
          </p>
          <p>
            We are located in Mississauga, and we provide our services in
            Bramton Oakville, Milton NorthYork Etobeco ect...
          </p>
          <Link href="/about">
            <a className="btn">About us</a>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
