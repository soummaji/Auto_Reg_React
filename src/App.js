import './App.css';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Application from './Components/Pages/Application';
import UserManagement from './Components/Pages/UserManagement';
import Login from './Components/Login/Login';


function App() {
  return (
    <div>
        <Routes>  
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/userManagement" element={<UserManagement />} />
        </Routes>
    </div>
  );
}

export default App;
