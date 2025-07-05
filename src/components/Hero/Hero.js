import { heroContent } from "../../data/data"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              {heroContent.title}
              <br />
              <span className={styles.subtitle}>{heroContent.subtitle}</span>
              <br />
              <span className={styles.description}>{heroContent.description}</span>
            </h1>
            <p className={styles.heroDetails}>{heroContent.details}</p>
            <button className={styles.heroButton}>{heroContent.buttonText}</button>
          </div>
          <div className={styles.heroImage}>
            <img src="/assets/images/hero-woman.jpg" alt="Woman with credit cards" className={styles.heroImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
