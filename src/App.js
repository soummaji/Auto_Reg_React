
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
