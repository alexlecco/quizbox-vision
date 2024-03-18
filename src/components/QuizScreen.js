import { useState, useEffect } from 'react'
import QuestionContainer from './QuestionContainer'

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

  // console.log("questionsData[0]::::::::::::", questionsData[0])

  return(
    <QuestionContainer
      questionData={questionsData[0]}
      answers={answers} />
  )
}

export default QuizScreen
