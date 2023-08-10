import React, { useState } from 'react'
import axios from 'axios';

export default function Scraper(){
    const [url , setUrl] = useState('')
    const [elements , setElements] = useState('')

    const datasend = async (e:any) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/api/userData", {
                url,
                elements
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    

    return(
        <>
        <div>
            <h1>Enter site url</h1>
            <input type="text" placeholder="Enter site name"  value={url} onChange={(e) => setUrl(e.target.value)}/>
            <button onClick={datasend}>submit</button>

            <h2>elements to be scraped</h2>
            <input value={elements} onChange={(e) => setElements(e.target.value)} type="text" placeholder="Enter elements" />
            
        </div>
        </>
    )
}