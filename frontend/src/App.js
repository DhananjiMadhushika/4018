import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ToDoHome from './Pages/ToDoHome';
import AddTask from './Pages/AddTask';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/todo_home' element={<ToDoHome/>}/>
          <Route path='/add' element={<AddTask/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
