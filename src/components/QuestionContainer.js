// libraries
import { htmlUnescape } from 'escape-goat';

const QuestionContainer = ({
  questionsData,
  answers,
  selectAnswer,
  questionNumber,
  setQuestionNumber,
  setIsCompleted,
  numberOfQuestions,
}) => {
  const category = questionsData[questionNumber].category
  const difficulty = questionsData[questionNumber].difficulty
  const type = questionsData[questionNumber].type

  const onHandleSelectAnswer = (answer) => {
    questionNumber === numberOfQuestions - 1 ? setIsCompleted(true) : setQuestionNumber(questionNumber + 1)
    selectAnswer(answer, type)
  }

  return(
    <>
      <div className='App-container'>
        <div className='questionFeatures'>
          <p>category: <br /> {questionsData[questionNumber] && htmlUnescape(category)}</p>
          <p>difficulty: <br /> {questionsData[questionNumber] && htmlUnescape(difficulty)}</p>
        </div>
        <p>{questionNumber + 1}/{numberOfQuestions}</p>
        <p>{questionsData[questionNumber] && htmlUnescape(questionsData[questionNumber].question)}</p>
        <div className="answerContainer">
          {answers.map(answer =>
            <button
              key={answer.answer}
              className='answer'
              onClick={() => onHandleSelectAnswer(answer)}
            >
              {answer.answer}
            </button>)}
        </div>
      </div>
    </>
  )
}

export default QuestionContainer
