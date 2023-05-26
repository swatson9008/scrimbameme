import memesData from "../assets/memesData"

export default function Meme(){
    function memeDisplay(){
        event.preventDefault();
        const memesArray = memesData.data.memes;
        const genNumber = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[genNumber].url);

    }
    return(
        <div className="Meme">
            <form className="MemeForm">
                <input type="text" placeholder="Top text"></input>
                <input type="text" placeholder="Bottom text"></input>
                <input type="submit" value="Get a new meme image 🖼️" className="SubmitButton" onClick={memeDisplay}></input>
            </form>
        </div>
    )
}