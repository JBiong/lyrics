import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function PageNotFound(){
    const nav = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            nav("/",{replace:true, state:{message:"Gikan Nawala!"}})
        },3000)
    },[])
    return <>
    <h1>Nasaag lagi ka! Not Found! If you can't find it here, you'll never find it elsewhere!</h1>
    <Link to="/"><button>Back sa First!</button></Link>
    </>
    // return <Navigate to="/"/>
}