import styles from "./Blog.module.css"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Get Instant Cash from Credit Card in Chennai",
      excerpt: "Learn the fastest and safest ways to convert your credit card limit into cash instantly.",
      date: "January 15, 2024",
      image: "/assets/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Benefits of Cash Against Credit Card Services",
      excerpt: "Discover the advantages of using professional cash against credit card services.",
      date: "January 10, 2024",
      image: "/assets/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Emergency Cash Solutions in Chennai",
      excerpt: "When you need money urgently, here are your best options for quick cash solutions.",
      date: "January 5, 2024",
      image: "/assets/images/blog3.jpg",
    },
  ]

  return (
    <div className={styles.blog}>
      <section className={styles.blogHero}>
        <div className="container">
          <h1>Our Blog</h1>
          <p>Latest insights and tips about cash against credit card services</p>
        </div>
      </section>

      <section className={styles.blogContent}>
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <img src={post.image || "/placeholder.svg"} alt={post.title} />
                </div>
                <div className={styles.blogInfo}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
