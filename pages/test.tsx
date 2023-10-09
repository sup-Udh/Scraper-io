const axios = require("axios")
import { useState } from "react"

export default function test(){
    const [url, setUrl] = useState("")
    const [elements, setElements] = useState("")
    const sub = async (e: any) => {
        e.preventDefault();
        const response = await axios.post("/api/test", {
            url: "https://www.amazon.com/Apple-iPhone-12-Mini-64GB/dp/B08PNN2SKF/ref=sr_1_1?keywords=apple+iphone+12&sr=8-1",
            elements: "h1"
        })
        const data = response.data
        console.log(data)
    }
    return(
        <>
        <h1>TEST</h1>

        <input type="text" placeholder="Enter your url" value={url} onChange={(e) => setUrl(e.target.value)}/>
        <input type="text" placeholder="enter Your elements" value={elements} onChange={(e) => setElements(e.target.value)} />
        <button onClick={sub}>Submit</button>

        </>

    )
}