import { aboutContent } from "../../data/data"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h1>{aboutContent.title}</h1>
              <p className={styles.description}>{aboutContent.description}</p>

              <div className={styles.features}>
                <h3>Why Choose Us?</h3>
                <ul>
                  {aboutContent.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.aboutImage}>
              <img
                src="/assets/images/about-illustration.jpg"
                alt="Cash Against Credit Card Service"
                className={styles.aboutImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p>
              To provide instant and reliable cash against credit card services to individuals and businesses across
              Chennai and India. We believe in transparency, trust, and customer satisfaction above all.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
