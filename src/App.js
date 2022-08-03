import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Reviews from './Pages/Home/Reviews/Reviews';
import AllFlavours from './Pages/AllFlavours/AllFlavours';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/flavours' element={<AllFlavours></AllFlavours>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
