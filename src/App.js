import './App.css';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import TaskCounter from './TaskCounter';

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <TaskCounter />
        <TaskInput />
        <TaskList />
      </div>
         
    </div>
  );
}

export default App;
