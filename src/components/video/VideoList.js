import { VideoItem } from "./VideoItem";

export function VideoList ({videos, emptyHeading}){
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
        const noun =  count > 1 ?  'VideoItems' :  'VideoItem';
        heading = count + ' ' + noun;
    }
    return(
    <div>
      <h2>{heading}</h2>
      {videos.map(video => (
        <VideoItem key={video.url} video={video} />
      ))}
    </div>
    )

}
