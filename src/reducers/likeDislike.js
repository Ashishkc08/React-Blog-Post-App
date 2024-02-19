//const initialState = [];
const initialState = localStorage.getItem("react_assignment_redux_likes") ? 
JSON.parse(localStorage.getItem("react_assignment_redux_likes")) : [2,4]





const likeDislike = (state = initialState, action)=>{
  console.log("Current state:", state);
  console.log("Action:", action);
  
    switch(action.type){
        case "LIKE_DISLIKE_POST" : if (state.includes(action.payload)) {
          console.log("Removing postId:", action.payload);
          const newState = state.filter((id) => id !== action.payload);
          localStorage.setItem("react_assignment_redux_likes", JSON.stringify(newState));
            return newState
          } else {
            console.log("Adding postId:", action.payload);
            const newState = [...state, action.payload];
            localStorage.setItem("react_assignment_redux_likes", JSON.stringify(newState));
            return newState
          }
        
        default : return state;
    }
}

export default likeDislike;