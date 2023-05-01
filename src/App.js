
import './App.css';
import UserList from './components/userslist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './components/post';
import Todo from './components/todo';
import Gallary from './components/gallary';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
      
     < Router> 
     <Routes> 
      <Route path="/" element={<UserList />} />
      <Route path="/home" element={<Homepage />} />
      
      <Route path="/post" element={<Post />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/gallary" element={<Gallary/>} />


     </Routes>
     </Router>
      
      

      
    </div>
  );
}

export default App;
