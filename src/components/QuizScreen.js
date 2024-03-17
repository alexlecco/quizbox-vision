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

  return(
    <>
      <h1>{questionsData[0].question}</h1>
      <ul>
        {answers.map(answer => <p>{answer}</p>)}
      </ul>
    </>
  )
}

export default QuizScreen
