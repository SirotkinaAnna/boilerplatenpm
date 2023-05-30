

function Drumpad({ id, src, text, setText }) {

    const audio = new Audio(src);
    const handleClick = async () => {
        //  await audio.play();
        setText(text);
        const myAudio = document.querySelector("audio#" + id);
        myAudio.play();

    }
    return <div className='drum-pad border-2 border-indigo-600 text-center py-8' id={id} onClick={handleClick}>{id}
        <audio className="clip" src={src} id={id}></audio>
    </div>
}
export default Drumpad;