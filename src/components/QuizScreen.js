import { useState, useEffect } from 'react'
import QuestionContainer from './QuestionContainer'

const QuizScreen = ({ questionsData, setIsCompleted }) => {
  const [answers, setAnswers] = useState([])
  const [ questionNumber, setQuestionNumber] = useState(0)

  const unescapeHtml = data => {
    return data.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
  }

  useEffect(() => {
    const unsortedArraysOfAnswers = 
    questionsData[questionNumber].incorrect_answers.map(ans => ({
      answer: ans,
      correct: false
    }))
    unsortedArraysOfAnswers.push({
      answer: unescapeHtml(questionsData[questionNumber].correct_answer),
      correct: true
    })

    const sortedArraysOfAnswers = unsortedArraysOfAnswers.sort(
      () => Math.random() - .5
    ) 
    setAnswers(sortedArraysOfAnswers)
  }, [questionsData, questionNumber])

  const selectAnswer = answer => {
    return answer.correct ?
      console.log("respuesta correcta")
    :
      console.log("respuesta incorrecta")
  }

  return(
    <QuestionContainer
      questionsData={questionsData}
      answers={answers}
      selectAnswer={selectAnswer}
      unescapeHtml={unescapeHtml}
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}
      setIsCompleted={setIsCompleted}
    />
  )
}

export default QuizScreen
