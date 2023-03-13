import './App.css';
import './gamecatalog.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonsterHunter from './Monsterhunter/Monsterhunter';
import Navbar from './Navbar/Navbar';
import Hollowknight from './Hollowknight/Hollowknight';
import Eldenring from './Eldenring/Eldenring';
import Gamepicker from './Gamepicker/Gamepicker';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MonsterHunter/>}></Route>
          <Route path='/Hollowknight' element={<Hollowknight/>}></Route>
          <Route path='/Eldenring' element={<Eldenring/>}></Route>
          <Route path='/Gamepicker' element={<Gamepicker/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
