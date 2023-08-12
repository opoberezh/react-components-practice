import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SarchBar/SearchBar';
import { Layout } from './Layout';
import { Component } from 'react';

import { QuizForm } from './Form/Form';

export class App extends Component {
  // якщо потрібно ініціалізувати стан від якоїсь змінної, просто замість літера треба вказати імя змінної
state={
  quizitems: initialQuizItems,
}

// створюємо метод для зміни стану , щоб передати його до QuizCard , спочатку передаємо до  QuizList, апотім у QuizCard
handleDelete = (quizId) =>{
this.setState(prevState => {
  return {
    // треба взяти попередні дані мосива та пропустити через фільтр
    quizitems: prevState.quizitems.filter(quiz => quiz.id !== quizId)
    // умова фільтрації: нам потрібно залишити тільки ті елементи,  id яких не співпадає з  id ,які треба видалити
  }
})
}

addQuiz = newQuiz => {
  this.setState(prevState => {
    return {
      quizItems: [...prevState.quizItems, newQuiz],
    };
  });
};

getVisibleQuizItems = () => {
  const { quizItems, filters } = this.state;
  const lowerCaseTopic = filters.topic.toLowerCase();

  return quizItems.filter(quiz => {
    const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
    if (filters.level === 'all') {
      return hasTopic;
    }
    return hasTopic && quiz.level === filters.level;
  });
};

  render() {
      return (
        <Layout>
          <SearchBar />
          <QuizForm/>
          <QuizList items={this.state.quizitems} onDelete={this.handleDelete}/>
        </Layout>
    )
  }
   
   
}
