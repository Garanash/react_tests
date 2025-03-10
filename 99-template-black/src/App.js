import { BrouserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrouserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contacts" element={<h1>Contacts</h1>} />
        </Routes>
      </div>
    </BrouserRouter>
  );
}

export default App;
