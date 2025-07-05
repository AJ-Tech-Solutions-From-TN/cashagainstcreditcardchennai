"use client"

import { useState } from "react"
import styles from "./ContactForm.module.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    numbers: "",
    email: "",
    serviceRequired: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your message! We will contact you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      numbers: "",
      email: "",
      serviceRequired: "",
      message: "",
    })
  }

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>We Love to Hear From You</h2>
        <p className={styles.subtitle}>Please contact us over call or email us and we will be happy to assist you...</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Name *</label>
              <input
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>&nbsp;</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Numbers *</label>
            <input type="tel" name="numbers" value={formData.numbers} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Service Required *</label>
            <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} required>
              <option value="">Credit Card to Cash</option>
              <option value="spot-cash">Spot Cash on Credit Card</option>
              <option value="cash-against-card">Cash Against Credit Card</option>
              <option value="credit-to-cash">Credit Card to Cash</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
