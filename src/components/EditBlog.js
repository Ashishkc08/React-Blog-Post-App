import React,{useContext, useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import postContext from '../context/posts/PostContext'

export default function NewBlog() {
    const { id } = useParams(); // Get the id from the URL
  const { posts, editPost } = useContext(postContext);

  const postToEdit = posts.find((post) => post.id === Number(id));
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title)
      setContent(postToEdit.content)
      setCategory(postToEdit.category)
    }
  },[postToEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: postToEdit.id,
      title: title,
      category: category,
      content: content,
    };

    editPost(updatedPost);

    history(`/post/${postToEdit.id}`);
  };


    return (
        <div>
          <Link className='btn btn-primary' to={`/post/${postToEdit.id}`}>Back</Link>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
            required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
            required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Content:
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="4"
                        value={content}
                        onChange={handleContentChange}
            required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Edit Post
                </button>
            </form>
        </div>
    )
}
