import { useState, useEffect } from 'react'

const QuizScreen = ({questionsData}) => {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const unsortedArraysOfAnswers = [
      questionsData[0].correct_answer,
      ...questionsData[0].incorrect_answers
    ]
    const sortedArraysOfAnswers = unsortedArraysOfAnswers.sort(
      () => Math.random() - .5
    )  
    setAnswers(sortedArraysOfAnswers)
  }, [questionsData])

  const unescapeHtml = data => {
    return data.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
  }

  return(
    <div className='App-container'>
      <h1>{unescapeHtml(questionsData[0].question)}</h1>
      <ul>
        {answers.map(answer =>
          <li className='answer'>{answer}</li>)}
      </ul>
    </div>
  )
}

export default QuizScreen
