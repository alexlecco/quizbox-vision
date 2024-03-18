import { useState, useEffect } from 'react' 
import './App.css'

// components
import HomeScreen from './components/HomeScreen.js'
import QuizScreen from './components/QuizScreen.js'

function App() {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const [ started, setStarted ] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const APIurl = 'https://opentdb.com/api.php?amount=10'
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

  // console.log("data::::::::::::::::", data)

  return (
    <div className="App">
      <header className="App-header">
        {
          loading ?
            <p>loading questions...</p>
          : error ?
            <p>{error}</p>
          : !started ?
            <HomeScreen startQuiz={startQuiz} />
          :
            <QuizScreen questionsData={data}/>
          }
      </header>
    </div>
  );
}

export default App;
