
const QuestionContainer = ({
  questionsData,
  answers,
  selectAnswer,
  unescapeHtml,
  questionNumber,
  setQuestionNumber
}) => {
  const onHandleSelectAnswer = (answer) => {
    setQuestionNumber(questionNumber + 1)
    selectAnswer(answer)
  }

  return(
    <>
      <div className='App-container'>
        <div className='questionFeatures'>
          <p>category: <br /> {questionsData[questionNumber].category}</p>
          <p>difficulty: <br /> {questionsData[questionNumber].difficulty}</p>
        </div>
        <p>{questionNumber + 1}/10</p>
        <p>{unescapeHtml(questionsData[questionNumber].question)}</p>
        <div className="answerContainer">
          {answers.map(answer =>
            <button
              key={answer.answer}
              className='answer'
              onClick={() => onHandleSelectAnswer(answer)}
            >
              {unescapeHtml(answer.answer)}
            </button>)}
        </div>
      </div>
    </>
  )
}

export default QuestionContainer
