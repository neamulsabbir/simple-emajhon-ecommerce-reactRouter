
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/Shop';



function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path ='/' element={<Home></Home>}></Route>
        <Route path ='/shop' element={<Shop></Shop>}></Route>
        <Route path ='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path ='/orders' element={<Orders></Orders>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
