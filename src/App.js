import './App.css';
import GameArea from './components/GameArea.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About.js'
import NavBar from './components/NavBar.js'
import GuestBook from './components/GuestBook.js'
import Header from './components/Header.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<GameArea />} />
        <Route path="/about" element={<About/> } />
        <Route path="/guestbook" element={<GuestBook/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
