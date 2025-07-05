import { companyInfo, serviceLocations, paymentMethods } from "../../data/data"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
               <span> <img src={ companyInfo.logo }></img> </span>
            </div>
            <div className={styles.contactInfo}>
              <p>📍 {companyInfo.address.street}</p>
              <p>{companyInfo.address.city}</p>
              <p>📞 {companyInfo.phone}</p>
              <p>✉️ {companyInfo.email}</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Payment Methods</h3>
            <div className={styles.paymentMethods}>
              {paymentMethods.map((method, index) => (
                <div key={index} className={styles.paymentCard}>
                  {method}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Our Service Locations</h3>
            <ul className={styles.locationList}>
              {serviceLocations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; COPYRIGHT 2024. POWERED BY CASH AGAINST CREDIT CARD CHENNAI.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
