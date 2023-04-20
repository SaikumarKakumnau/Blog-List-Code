// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsItem} = props
  const {title, description, publishedDate} = blogsItem

  return (
    <li className="blog-Item-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="separator" />
    </li>
  )
}

export default BlogItem
