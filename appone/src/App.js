import { useNavigate } from 'react-router-dom'
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
       <h1>HELLO WORLD.... I'M SRIPATHI UDAYAKANTHA</h1>
       <button className='user-button' onClick={()=> navigate ('/users')}>users</button>
      </header>
    </div>
  );
}

export default App;
