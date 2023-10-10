import { useEffect, useState } from "react";
import { useOutlet, useOutletContext, useParams, useSearchParams } from "react-router-dom"


export default function SinglePost(){
    const data = useOutletContext()
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("use"));
    
    const {id} = useParams()
    
    const [post,setPost] =  useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.org/posts/${id}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            console.log(response)
            return response.json();
        })
        .then(p => {
            setPost(p)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    },[])
    return <>
    <h2>The Single Post</h2>
    {post.category===searchParams.get("category")?"Same":"Not Same"}
    <h4>{post.title}</h4>
    <p>{post.content}</p>
    <h5>{data.message}</h5>
    </>
}
