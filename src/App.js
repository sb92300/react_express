import logo from './logo.svg';
import './App.css';
import Hotels from './Hotel';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Hotels} />
    </div>
  );
}

export default App;
