import { TopicFilter } from "../TopicFilter";
import { LevelFilter } from "../LevelFiltre";
import { Wrapper } from "./SearchBar.styled";


export const SearchBar = () => {
    return (
        <Wrapper>
            <TopicFilter/>
            <LevelFilter/>
        </Wrapper>
    );
};
