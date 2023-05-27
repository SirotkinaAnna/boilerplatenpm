

function Drumpad({ id, src, text, setText }) {

    const audio = new Audio(src);
    const handleClick = async () => {
        await audio.play();
        setText(text)
    }
    return <div className='drum-pad border-2 border-indigo-600 text-center py-8' id={id} onClick={handleClick}>{id}
        <audio className="clip" src={src}></audio>
    </div>
}
export default Drumpad;