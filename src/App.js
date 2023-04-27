import freecodecampLogo from './images/fcc_primary_large.jpg'
import TaskList from './components/TaskList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={freecodecampLogo}
          className='freecodecamp-logo'
          alt='logofcc'
        />
      </div>
      <div className='main-tasklist'>
        <h1>
          Mis Tareas
        </h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
