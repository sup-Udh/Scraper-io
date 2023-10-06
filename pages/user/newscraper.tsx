import { useState } from 'react'
import axios from 'axios';
export default function newscraper(){
    const [name, setName] = useState("")
    const sub = async (e:any) => {
        e.preventDefault();

        try{
            // send data to api
            const response = await axios.post("/api/scraper/new_scraper", {
                name
            })
            console.log(response)
        } catch (error) {
            console.log(error)


        }
    }
    return(
        <>
        <h1>Setup Your Scraper</h1>
        <form>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="default URLS"/>
            <input placeholder="Elements"/>
            <input placeholder="functions"/>

            <input placeholder="Schedule"/>

            <button onClick={sub}>GO</button>


        </form>
        </>
    )
}