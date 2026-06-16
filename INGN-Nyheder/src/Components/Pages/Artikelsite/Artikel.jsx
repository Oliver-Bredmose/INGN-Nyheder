import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchBlogById } from "../../Hygraph-fetch"

function Artikel() {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()
  useEffect(() => { 
    fetchBlogById(id).then((data) => {
  setBlog(data.myblog)
})
  }, [])
  return (
  <div>
    {blog && (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.author}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content.html }}/>
        <img src={blog.image.url}/>
      </div>
    )}
  </div>
)
}
export default Artikel