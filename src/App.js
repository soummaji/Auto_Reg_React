
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SideNavBar from './Components/Sidebar/Sidebar';
import Login from './Components/Login/Login';
function App() {
  return (
    <div>
      <SideNavBar />
      <Router>
        <Routes>
        <Route exact path='/' element={<Login/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
