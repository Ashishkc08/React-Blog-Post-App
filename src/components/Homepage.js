import React, {useContext} from 'react'
import postContext from '../context/posts/PostContext'
import { Link } from 'react-router-dom'

export default function Homepage() {
  
  const {posts} = useContext(postContext)

  return (
    <>

      <div>
      <h2>Blog Posts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/post/${post.id}`}>
                  {post.title}{' '}
                  <span className="badge bg-danger">{post.category}</span>
                </Link>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}