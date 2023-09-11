const like_post={
    routes:[
        {
            method:"PUT",
            path:"/posts/:id/like",
            handler:"api::post.post.likedPost"
        }
    ]
}


module.exports=like_post