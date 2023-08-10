import { QuizList } from './QuizList/QuizList';
import quizItems from '../data.json';
import { SearchBar } from './SarchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { IconButton } from './IconButton/IconButton';
import { FaAngellist, FaEarlybirds,  FaGratipay } from 'react-icons/fa';


export const App = () => {
  return (
    <Layout>
      <SearchBar/>
      <QuizList items={quizItems}/>
       <IconButton variant="primery" size="sm">
        <FaAngellist/></IconButton>
      <IconButton variant="secondary" size="md">
        <FaGratipay />
      </IconButton>
      <IconButton variant="secondary" size="lg">
        <FaEarlybirds /> 
      </IconButton>

      <GlobalStyle/>
    </Layout>
  );
};
