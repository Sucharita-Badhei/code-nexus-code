import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Profile from './components/Profile';
import Search from './components/Search';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Lipstick from './components/Lipstick';
import Blusher from './components/Blusher';
import Perfume from './components/Perfume';
import Nav from './components/Nav';
import Foundation from './components/Foundation';
import AddtoCart from "./components/AddtoCart";
function App() {
  return (
    <div className="App">
      <h2>Glam Beauty</h2>
      <Nav/>
      <Routes>
      <Route path={"/profile"} element={<Profile/>}/>
      <Route path={"/search"} element={<Search/>}/>
      <Route path={"/home"} element={<Home/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
      <Route path={"/addtocart"} element={<AddtoCart/>}/>
      
      <Route path={"/menu"} element={<Menu/>}>
      <Route path={"lipstick"} element={<Lipstick/>}/>
      <Route path={"blusher"} element={<Blusher/>}/>
      <Route path={"foundation"} element={<Foundation/>}/>
      <Route path={"perfume"} element={<Perfume/>}/>
        </Route>
        </Routes>
    </div>
  );
}

export default App;
