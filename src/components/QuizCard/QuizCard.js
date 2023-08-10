import {Wrapper, Topic, Text, Delete} from './QuizCard.styled';

export const QuizCard = ({
    item: { id, topic, level, time, questions },
    onDelete,
  }) => {
    return (
        <Wrapper>
          <Topic>{topic}</Topic>
          <Text>
            <b>Level:</b> {level}
          </Text>
          <Text>
            <b>Time:</b> {time} min
          </Text>
          <Text>
            <b>Questions:</b> {questions}
          </Text>
            <div>
                {/* якщо не потрібно передаватииаргумент, передаємо посилання на функцію */}
                {/* <Delete onClick={onDelete}>Delete</Delete> */}


                {/* якщо необхідно передати аргумент , треба передати посилання на анонімну стрілку всередені якої визиваємо свою функцію з аргументом */}
                <Delete onClick={()=>onDelete(id) }>Delete</Delete>
            </div>
        </Wrapper>
    );
};

// // приклад з js
// function foo (e){}
// addEventListener('click', foo)
// // або, якщо треба передати аргумент
// addEventListener('click', ()=> foo(5))