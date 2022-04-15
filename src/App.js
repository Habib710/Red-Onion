import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login'
import Singup from './Component/Singup/Singup'

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/singup' element={<Singup></Singup>}></Route>


     </Routes>
    </div>
  );
}

export default App;
