import './App.css';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      <MyComponents animal='dog' mood='sad' hasPet={true} />
      <MyComponents animal='cat' mood='happy' hasPet={false} />
    </div>
  );
}

export default App;
