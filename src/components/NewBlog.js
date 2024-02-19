import React, { useContext, useState } from 'react';
import postContext from '.././context/posts/PostContext';
import { Link } from 'react-router-dom';

export default function NewBlog() {
  const { addPost, posts } = useContext(postContext);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: posts.length + 1,
      title,
      category,
      content,
    };

    addPost(newPost);

    setTitle('');
    setCategory('');
    setContent('');
  };

  return (
    <div>
      <Link className='btn btn-primary' to='/'>Back</Link>
      <h2>Create New Post</h2>
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
          Create Post
        </button>
      </form>
    </div>
  )
}
