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

  console.log("questionsData[0]::::::::::::", questionsData[0])

  return(
    <div className='App-container'>
      <div className='questionFeatures'>
        <p>category: {unescapeHtml(questionsData[0].category)}</p>
        <p>difficulty: {questionsData[0].difficulty}</p>
      </div>
      <p>{unescapeHtml(questionsData[0].question)}</p>
      <ul>
        {answers.map(answer =>
          <li className='answer'>{answer}</li>)}
      </ul>
    </div>
  )
}

export default QuizScreen
