import './App.css';
import GameArea from './components/GameArea.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About.js'
import NavBar from './components/NavBar.js'
import SafetyTips from './components/SafetyTips.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>test</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<GameArea />} />
        <Route path="/about" element={<About/> } />
        <Route path="/safetytips" element={<SafetyTips/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
