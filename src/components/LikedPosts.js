import { useContext } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import postContext from '../context/posts/PostContext'

export default function LikedPosts() {
  const mystate = useSelector((state)=>state.likeDislike)
  const {posts} = useContext(postContext)
  const likedPosts = posts.filter((post) => mystate.includes(post.id));
  return (
    <div>
      <Link className='btn btn-primary' to='/'>Back</Link>
      <h2>Liked Posts</h2>
      {likedPosts.length>0?(
      <table className="table">
        <thead>
          <tr>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {likedPosts.map((post) => (
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
      </table>):(
      <p>No liked posts available.</p>
      )}
    </div>
  );
}
