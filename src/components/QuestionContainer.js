const QuestionContainer = ({
  questionsData,
  answers,
  selectAnswer,
  unescapeHtml,
  questionNumber,
  setQuestionNumber,
  setIsCompleted,
  setScore,
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
          <p>category: <br /> {questionsData[questionNumber] && category}</p>
          <p>difficulty: <br /> {questionsData[questionNumber] && difficulty}</p>
        </div>
        <p>{questionNumber + 1}/{numberOfQuestions}</p>
        <p>{unescapeHtml(questionsData[questionNumber] && questionsData[questionNumber].question)}</p>
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
