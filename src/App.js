import { useState, useEffect } from 'react' 
import './App.css'

// components
import HomeScreen from './components/HomeScreen.js'
import QuizScreen from './components/QuizScreen.js'

function App() {
  const [ questions, setQuestions ] = useState()
  const [ started, setStarted ] = useState(false)

  useEffect(() => {
    const url = 'https://opentdb.com/api.php?amount=10'

    fetch(url)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [])

  const startQuiz = () => setStarted(true)

  return (
    <div className="App">
      <header className="App-header">
        { !started ? <HomeScreen startQuiz={startQuiz} /> : <QuizScreen /> }
      </header>
    </div>
  );
}

export default App;
