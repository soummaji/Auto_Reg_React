import './App.css';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Application from './Components/Pages/Application';
import UserManagement from './Components/Pages/UserManagement';
import Login from './Components/Login/Login'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Sidebar><Home /></Sidebar>} />
        <Route path="/application" element={<Sidebar><Application /></Sidebar>} />
        <Route path="/userManagement" element={<Sidebar><UserManagement /></Sidebar>} />
      </Routes>
    </div>
  );

}


export default App;
