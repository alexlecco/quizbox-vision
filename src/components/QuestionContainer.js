const QuestionContainer = ({ questionData, answers }) => {
  return(
    <>
      <div className='App-container'>
        <div className='questionFeatures'>
          <p>category: <br /> {questionData.category}</p>
          <p>difficulty: <br /> {questionData.difficulty}</p>
        </div>
        <p>{questionData.question}</p>
        <div className="answerContainer">
          {answers.map(answer =>
            <button
              key={answer.answer}
              className='answer'
              onClick={() => console.log("presionado")}
            >
              {answer.answer}
            </button>)}
        </div>
      </div>
    </>
  )

}

export default QuestionContainer
