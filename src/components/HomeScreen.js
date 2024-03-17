const HomeScreen = ({ startQuiz }) => {
  return (
    <>
      <h1> Quizbox Vision "Gaming Edition" </h1>
      <p> lets play a quiz about Videogames </p>
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