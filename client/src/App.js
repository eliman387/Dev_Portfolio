import { Route } from 'react-router-dom';
import './App.css';
import AboutMe from './screens/AboutMe';
import Homepage from './screens/Homepage';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/about-me">
        <AboutMe/>
      </Route>
    </div>
  );
}

export default App;
