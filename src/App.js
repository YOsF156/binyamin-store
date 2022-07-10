import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Layout from './Layout';

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.atLogin)
  return (
    <div className="App">
      {isLogged ?
        <Layout setIsLogged={setIsLogged} /> :
        <Login setIsLogged={setIsLogged} />}
    </div>
  );
}

export default App;
