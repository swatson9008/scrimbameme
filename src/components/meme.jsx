import { useState } from "react";
import memesData from "../assets/memesData"

export default function Meme(){
    const [memeImage, imageShift] = useState();
    function memeDisplay(){
        event.preventDefault();
        const memesArray = memesData.data.memes;
        const genNumber = Math.floor(Math.random() * memesArray.length);
        const imageM = (memesArray[genNumber].url);
        imageShift(memeImage => imageM);

    }
    return(
        <div className="Meme">
            <form className="MemeForm">
                <input type="text" placeholder="Top text"></input>
                <input type="text" placeholder="Bottom text"></input>
                <input type="submit" value="Get a new meme image 🖼️" className="SubmitButton" onClick={memeDisplay}></input>
            </form>
            <img src={memeImage} className="memeImages"/>
        </div>
    )
}