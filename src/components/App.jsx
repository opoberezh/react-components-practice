import videos from "./data/videos.json";
import { VideoList } from "./video/VideoList";



export const App = () => {
  return (
    <div>
      <VideoList videos={videos}/>
    </div>
  );
};
