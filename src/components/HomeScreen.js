const HomeScreen = ({ startQuiz }) => {
  return (
    <>
      <h1> Quizbox Vision </h1>
      <p> lets play a quiz </p>
      <button
        onClick={startQuiz}
        className='App-button'
      >
        start
      </button>
    </>
  )
}

export default HomeScreen
