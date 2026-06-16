import { useState, useEffect } from "react"
import { fetchblogs } from "../../Hygraph-fetch";
import Navbar from "../../Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom"
import styles from "./Hovedesite.module.scss"

function Hovedesite() {
  const [blogs, setBlogs] = useState([])
   const [activeCategory, setActiveCategory] = useState("Alle")
   const categories = ["Alle", ...new Set(blogs.map((blog) => blog.category))]
   const filteredBlogs = activeCategory === "Alle" 
  ? blogs 
  : blogs.filter((blog) => blog.category === activeCategory)
 // blog filter er hjælp fra claude ai 

  useEffect(() => {
    fetchblogs().then((data) => {
  setBlogs(data.myblogs)
})
  }, [])

  return (
      // den første div under filterblogs.map er fra ai 
  <div className={styles.mainContainer}>
    <Navbar categories={categories} setActiveCategory={setActiveCategory}/>
    <div className={styles.container}>
      {filteredBlogs.map((blog, index) => (
          <div key={blog.title} className={index === 0 ? styles.cardFeatured : styles.card}>
          <p className={styles.category}>{blog.category}</p>
          <h1 className={styles.headline}>{blog.title}</h1>
          <span>
            <img className={styles.image} src={blog.image.url}/>
            <p>{new Date(blog.date).toLocaleDateString("da-DK")} - af {blog.author}</p>
            <Link to={`/artikel/${blog.id}`}>Læs mere</Link>
          </span>
          <span>
            <p>{blog.content.text.slice(0, 100)}...</p>
          </span>
        </div>
      ))}
    </div>
    <Footer/>
  </div>
)
}

export default Hovedesite