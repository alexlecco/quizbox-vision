import { useState, useEffect } from 'react'
import QuestionContainer from './QuestionContainer'

const QuizScreen = ({ questionsData }) => {
  const [answers, setAnswers] = useState([])

  const unescapeHtml = data => {
    return data.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
  }

  useEffect(() => {
    const unsortedArraysOfAnswers = 
      questionsData[0].incorrect_answers.map(ans => ({
        answer: ans, correct: false
      }))
    unsortedArraysOfAnswers.push({
      answer: unescapeHtml(questionsData[0].correct_answer), correct: true
    })

    const sortedArraysOfAnswers = unsortedArraysOfAnswers.sort(
      () => Math.random() - .5
    )  
    setAnswers(sortedArraysOfAnswers)
  }, [questionsData])

  return(
    <QuestionContainer
      questionData={questionsData[0]}
      answers={answers}
    />
  )
}

export default QuizScreen
