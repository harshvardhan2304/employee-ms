import './App.css';
import Home from './components/Home/Home.js';
import AllUser from './components/AllUser/AllUser.js';
import Login from './components/Login/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee/AddEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        {/* http://localhost:3000/Login */}
        <Route path='/' element = {<Login/>}></Route>

        {/* http://localhost:3000/Home */}
        <Route path='/Home' element ={<Home/>}></Route>

        {/* http://localhost:3000/employees/allUsers */}
        <Route path='/employees/allUsers' element = {<AllUser/>}></Route>

        {/* http://localhost:3000/add-employee */}
        <Route path='/add-employee' element = {<AddEmployee/>}></Route>

        {/* http://localhost:3000/edit-employee */}
        <Route path='/edit-employee/:id' element = { <AddEmployee/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
