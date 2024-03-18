const QuestionContainer = ({ questionData, answers }) => {
  const unescapeHtml = data => {
    return data.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
  }

  return(
    <>
      <div className='App-container'>
        <div className='questionFeatures'>
          <p>category: <br /> {unescapeHtml(questionData.category)}</p>
          <p>difficulty: <br /> {questionData.difficulty}</p>
        </div>
        <p>{unescapeHtml(questionData.question)}</p>
        <ul className="answerContainer">
          {answers.map(answer =>
            <li className='answer'>{answer}</li>)}
        </ul>
      </div>
    </>
  )

}

export default QuestionContainer
