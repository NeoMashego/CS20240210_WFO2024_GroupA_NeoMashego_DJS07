import memesData from './assets/MemeData.js'

function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
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
                <img className="meme-img" src={meme.randomImage} />
            </form>
        </main>
    );
}

export default Meme