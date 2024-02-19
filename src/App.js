import './App.css';
import BlogDetails from './components/BlogDetails';
import EditBlog from './components/EditBlog';
import NewBlog from './components/NewBlog';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PostState from './context/posts/PostState';
import { useEffect } from 'react';
import LikedPosts from './components/LikedPosts';

function App() {
  function RedirectToHome() {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate('/');
    }, [navigate]);
  }
  return (
    <PostState>
    <Router>
    <div className="App">
      <Navbar title="React Assignment" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/post/:id" element={<BlogDetails/>} />
          <Route path="/new" element={<NewBlog/>} />
          <Route path="/edit/:id" element={<EditBlog/>} />
          <Route path="/liked" element={<LikedPosts/>} />
          <Route path="*" element={<RedirectToHome/>} />
        </Routes>
      </div>
    </div>
  </Router>
  </PostState>
  );
}

export default App;
