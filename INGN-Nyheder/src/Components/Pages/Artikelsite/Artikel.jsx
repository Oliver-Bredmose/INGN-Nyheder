import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchBlogById } from "../../Hygraph-fetch"

function Artikel() {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()
  useEffect(() => { 
    fetchBlogById(id).then((data) => {
  setBlog(data.blog)
})
  }, [])
  return (
  <div>
    {blog && (
      <div>
        <h1>{blog.headline}</h1>
        <p>{blog.author}</p>
        <p>{blog.textContent.text}</p>
        <img src={blog.image.url}/>
      </div>
    )}
  </div>
)
}
export default Artikel