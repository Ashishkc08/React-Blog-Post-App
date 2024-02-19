import React, {useContext} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import postContext from '../context/posts/PostContext'
import { useDispatch,useSelector } from 'react-redux';
import { likeDislike } from '../actions';


function BlogDetails() {

  
  const dispatch = useDispatch()

  const { id } = useParams();
  const {posts, deletePost} = useContext(postContext)
  const post = posts.find((post) => post.id === Number(id));
  const mystate = useSelector((state) => state.likeDislike);
  const isLiked = mystate.includes(Number(post.id));
  const likeButtonClass = isLiked ? 'btn-dark' : 'btn-light';
  const navigate = useNavigate()
  if (!post) {
    return <div>Post not found</div>;
  }
  
  const handleDelete = () => {
    deletePost(post.id);
    navigate(`/`);
  };
 


  return (
    <div>
      <Link className='btn btn-primary m-3' to='/'>Back</Link>
      <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
      <h2>{post.title}</h2>
      <span className="badge bg-danger">{post.category}</span>
      <p>{post.content}</p>
      <Link className='btn btn-warning me-3' to={`/edit/${post.id}`}>Edit</Link>
      <button className={`btn ${likeButtonClass}`} onClick={()=>dispatch(likeDislike(post.id))}>Like</button>
    </div>
  );
}

export default BlogDetails;
