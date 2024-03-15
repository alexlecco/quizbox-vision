import { useState, useEffect } from 'react' 
import './App.css';

function App() {
  const [ questions, setQuestions ] = useState({})

  useEffect(() => {
    const url = 'https://opentdb.com/api.php?amount=10'

    fetch(url)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [])

  console.log("questions:::::::::::", questions)

  return (
    <div className="App">
      <header className="App-header">
        <h1> Quizbox Vision </h1>
        <p> lets play a quiz game </p>
        <button className='App-button'>start</button>
      </header>
    </div>
  );
}

export default App;
