
import {Item, Container, Video, Title, Describtion, Poster} from "./Videos.styled";


export const VideoItem = (({video}) => {
  

return(

    <Item>
        <Poster src={video.thumbnail} alt={video.title}/>
        <Container video={video} />
        <Link href={video.url}>
            <Title>{video.title}</Title>
            <Describtion>{video.describtion}</Describtion>
            
            <button>{`Like ${video.likes}`}</button>

        </Link>
    </Item>
);
})