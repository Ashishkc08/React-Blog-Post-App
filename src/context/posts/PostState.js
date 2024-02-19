import postContext from "./PostContext"
import postsData from '../../data/posts.json'
import { useEffect, useState } from "react"

const PostState = (props) =>{
    //const s1 = postsData;
    const s1 = ()=>{
      const data = localStorage.getItem("react_assignment_context_api_posts")
      return data ? JSON.parse(data) : postsData
    }

    const [state, setState] = useState(s1)
    console.log("This is check",state.length);
    
    useEffect(()=>{
      localStorage.setItem("react_assignment_context_api_posts", JSON.stringify(state));
    },[state])


      const addPost = (newPost) => {
        setState([...state, newPost]);
      };

      const editPost = (updatedPost) => {
        const postToEdit = state.map((post)=>{
          if (post.id === updatedPost.id){
            return {...post, ...updatedPost}
          }
          return post;
        })
        setState(postToEdit)
      };

      const deletePost = (postId) => {
        const updatedPosts = state.filter((post) => post.id !== postId);
        setState(updatedPosts);
      };
    
    //  console.log("This is check",state.length);

    return(
        <postContext.Provider value = {{posts : state, addPost, editPost, deletePost}}>
            {props.children}
        </postContext.Provider>
    )
}

export default PostState
