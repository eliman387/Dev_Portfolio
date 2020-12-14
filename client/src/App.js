import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './screens/Homepage';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Homepage/>
      </Route>
    </div>
  );
}

export default App;
