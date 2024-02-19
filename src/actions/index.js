export const likeDislike = (postId)=>{
    return {
        type : "LIKE_DISLIKE_POST",
        payload: postId
    }}