import './App.css';
import Header from './components/Header/Header.js';
import Poster from './components/Poster/Poster';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selo from './components/Selos/Selo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Poster/>
      <Selo/>
    </div>
  );
}

export default App;
