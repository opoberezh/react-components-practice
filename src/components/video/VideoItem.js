
export const VideoItem = (({video}) => {
    const imgPath = "./Images/";

return(

    <li>
        <thumb video={video} />
        <a href={video.url}>
            <h2>{video.title}</h2>
            <p>{video.describtion}</p>
            <img  src={imgPath} alt={video.title}/>
            <button>{`Like ${video.likes}`}</button>

        </a>
    </li>
);
})