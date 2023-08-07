import { TopicFilter } from "./TopicFilter";
import { LevelFilter } from "./LevelFiltre";

export const SearchBar = () => {
    return (
        <div>
            <TopicFilter/>
            <LevelFilter/>
        </div>
    );
};
