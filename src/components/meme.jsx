import { useState } from "react";
import memesData from "../assets/memesData"

export default function Meme(){

    const [meme, imageShift] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function memeDisplay(){
        event.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const genNumber = Math.floor(Math.random() * memesArray.length);
        const imageM = (memesArray[genNumber].url);
        imageShift(prevMeme => ({
            ...prevMeme,
            randomImage: imageM
        }));

    }
    return(
        <div className="Meme">
            <form className="MemeForm">
                <input type="text" placeholder="Top text"></input>
                <input type="text" placeholder="Bottom text"></input>
                <input type="submit" value="Get a new meme image 🖼️" className="SubmitButton" onClick={memeDisplay}></input>
            </form>
            <img src={meme.randomImage} className="memeImages"/>
        </div>
    )
}