const ScoreScreen = ({
  score,
  restartQuiz,
}) => {
  return (
    <>
      <p>end of quiz</p>
      <p>final score: {score}</p>
      <button
        onClick={restartQuiz}
        className='App-button'
      >
        restart Quiz
      </button>
    </>
  )
}

export default ScoreScreen
