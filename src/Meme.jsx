
function Meme(){
    return(
        <main>
            <form className="form">
                <input className="form-inputs" type="text" placeholder="Top text"></input>
                <input className="form-inputs" type="text" placeholder="Bottom text"></input>
                <button className="form-button">Get a new meme image </button>
            </form>
        </main>
    );
}

export default Meme