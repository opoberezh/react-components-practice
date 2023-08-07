import { VideoItem } from "./VideoItem";
import {Wrapper, Title} from "./Videos.styled";
export function VideoList ({videos, emptyHeading}){
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
        const noun =  count > 1 ?  'Videos' :  'Video';
        heading = count + ' ' + noun;
    }
    return(
    <Wrapper>
      <Title>{heading}</Title>
      {videos.map(video => (
        <VideoItem key={video.url} video={video} />
      ))}
    </Wrapper>
    )

}
