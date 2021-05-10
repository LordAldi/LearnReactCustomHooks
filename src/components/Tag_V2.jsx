import React,{ useState, useEffect} from 'react'
import useGif from '../useGif'
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [tag,setTag]=useState("dogs")
    const {gif,fetchGif} = useGif(tag)
    
    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="RandomGif"/>
            <input value={tag} onChange={(e)=>setTag(e.target.value)}/>
            <button onClick={()=>{fetchGif(tag)}}>CLICK FOR NEW</button>
        </div>
    )
}
export default Random