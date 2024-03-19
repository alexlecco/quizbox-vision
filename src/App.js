import { useState, useEffect } from 'react' 
import './App.css'

// components
import HomeScreen from './components/HomeScreen.js'
import QuizScreen from './components/QuizScreen.js'
import ScoreScreen from './components/ScoreScreen.js'

function App() {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ isCompleted, setIsCompleted ] = useState(false)
  const [ score, setScore ] = useState(0)
  const [ started, setStarted ] = useState(false)
  const numberOfQuestions = 10

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const APIurl = `https://opentdb.com/api.php?amount=${numberOfQuestions}`
      const response = await fetch(APIurl)
      const data = await response.json()
      const questions = data.results
      setData(questions)
    } catch(error) {
      console.log(error)
      setError(`no questions found. Error: ${error}`)
    }
  }

  const startQuiz = () => setStarted(true)

  return (
    <div className="App">
      <header className="App-header">
        {
          loading ?
            <p>loading questions...</p>

          : error ?
            <p>{error}</p>

          : isCompleted ?
            <ScoreScreen score={score} />

          : !started ?
            <HomeScreen startQuiz={startQuiz} />
            
          :
            <QuizScreen
              questionsData={data}
              setIsCompleted={setIsCompleted}
              score={score}
              setScore={setScore}
              numberOfQuestions={numberOfQuestions}
            />
          }
      </header>
    </div>
  );
}

export default App;
