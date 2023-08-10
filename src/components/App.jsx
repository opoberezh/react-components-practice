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
console.log('handleDelete', quizId)
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
