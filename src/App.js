
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'



function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pages/Portfolio' element={<Portfolio/>}/>
        <Route path='/Pages/About' element={<About/>}/>
        <Route path='/Pages/Contact' element={<Contact/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
