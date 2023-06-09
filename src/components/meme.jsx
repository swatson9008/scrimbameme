import { useState } from "react";
import { useEffect } from "react";

export default function Meme(){

    const [meme, imageShift] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState(1);

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(allMemeImages => setAllMemeImages(allMemeImages))
            
    }, [])

    function handleChange(event){
        imageShift(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }

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
                <input type="text" name="topText" onChange={handleChange} placeholder="Top text"></input>
                <input type="text" name="bottomText" onChange={handleChange} placeholder="Bottom text"></input>
                <input type="submit" value="Get a new meme image 🖼️" className="SubmitButton" onClick={memeDisplay}></input>
            </form>
            <div className="memeEntry">
            <img src={meme.randomImage} className="memeImages"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}