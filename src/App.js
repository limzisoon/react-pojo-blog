import Home from './Home';
import Home1 from './Home1';
import Component from './Component';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="content">
        <h1>##1<Component/></h1>
        <h1>##2<Home1/></h1>
        <h2>##3<Home/></h2>
      </header>
    </div>
  );
}

export default App;
