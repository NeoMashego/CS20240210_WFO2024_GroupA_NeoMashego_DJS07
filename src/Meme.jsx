import memesData from './assets/MemeData.js'

function Meme(){
    let url

    function getMemeImage(){
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return(
        <main>
            <form className="form">
                <label>Top Text
                    <input className="form-inputs" type="text" placeholder="Top text" />
                </label>
                <label>Bottom Text
                    <input className="form-inputs" type="text" placeholder="Bottom text" />
                </label>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
        </main>
    );
}

export default Meme