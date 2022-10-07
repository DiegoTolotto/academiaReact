import './App.css';
import Header from './components/Header/Header.js';
import Poster from './components/Poster/Poster';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selo from './components/Selos/Selo';
import Nutri from './components/Nutricionista/Nutri';
import Tipos from './components/Exercicios/Tipos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Poster/>
      <Selo/>
      <Nutri/>
      <Tipos/>
    </div>
  );
}

export default App;
