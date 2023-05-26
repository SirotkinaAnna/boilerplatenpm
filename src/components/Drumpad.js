function Drumpad({ id, src }) {
    const handleClick = () => {
        const audio = document.querySelector(".clip");
        audio.addEventListener("play", (event) => {
            console.log(event)
        })
    }
    return <div className='drum-pad border-2 border-indigo-600 text-center py-8' id={id} onClick={handleClick}>{id}
        <audio className="clip" src={src}></audio>
    </div>
}
export default Drumpad;