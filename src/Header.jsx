import trollFace from './assets/troll-face.png'

function Header(){
    return(
        <header className="header">
            <img className="header-img" src={trollFace} alt="troll face image"></img>
            <h1 className="header-title">Meme Generator</h1>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    );
}

export default Header