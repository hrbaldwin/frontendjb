import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePosts = (props)=>{
    const { userPosts, setUserPosts } = props

    async function handleSubmit(e){
        e.preventDefault();
        const token = localStorage.getItem("token")
        const newPost = await createPost(
            userPosts,
            setUserPosts,
            token
        )
        console.log(newPost)
    }
    return(
    <>
    <div></div>
    </>
    )
}

export default CreatePosts;