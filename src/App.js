import Home from './Home';
import Home1 from './Home1';
import Component from './Component';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <header className="content">
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/create"><Create/></Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
