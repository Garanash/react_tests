import { useState } from "react"
import './App.css';
import MyButton from './components/MyButton';
import MyCounter from './components/MyCounter';

function App() {
  const [counter, setCounter] = useState(0)
  const IncrementCount = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="App">
    <MyCounter counter={counter} />
    <MyButton onClick={IncrementCount} />
    <MyButton onClick={IncrementCount} />
    <MyButton onClick={IncrementCount} />
    <MyButton onClick={IncrementCount} />
    </div>
  );
}

export default App;
