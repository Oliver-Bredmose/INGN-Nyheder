import { useState, useEffect } from "react"
import { fetchblogs } from "../../Hygraph-fetch";
import Navbar from "../../Navbar";
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
  setBlogs(data.blogs)
})
  }, [])

  return (
  <div>
    <Navbar categories={categories} setActiveCategory={setActiveCategory}/>
    <div className={styles.container}>
      {filteredBlogs.map((blog) => (
        <div key={blog.headline} className={styles.card}>
          <p className={styles.category}>{blog.category}</p>
          <h1 className={styles.headline}>{blog.headline}</h1>
          <img className={styles.image} src={blog.image.url}/>
          <p>{blog.textContent.text}</p>
          <Link to={`/artikel/${blog.id}`}>Læs mere</Link>
          <p>{new Date(blog.date).toLocaleDateString("da-DK")}</p>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  </div>
)
}

export default Hovedesite