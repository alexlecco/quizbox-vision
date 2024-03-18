import { useState, useEffect } from 'react' 
import './App.css'

// components
import HomeScreen from './components/HomeScreen.js'
import QuizScreen from './components/QuizScreen.js'

function App() {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ started, setStarted ] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
    fetchData()
  }, [])

  const fetchData = async () => {
    const APIurl = 'https://opentdb.com/api.php?amount=10'
    const response = await fetch(APIurl)
    const data = await response.json()
    const questions = data.results
    setData(questions)
  }

  const startQuiz = () => setStarted(true)

  return (
    <div className="App">
      <header className="App-header">
        {
          loading ?
            <p>loading questions...</p>
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
