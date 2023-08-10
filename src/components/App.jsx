import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SarchBar/SearchBar';
import { Layout } from './Layout';
import { Component } from 'react';

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

  render() {
      return (
        <Layout>
          <SearchBar />
          <QuizList items={this.state.quizitems} onDelete={this.handleDelete}/>
        </Layout>
    )
  }
   
   
}
