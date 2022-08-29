import logo from './logo.svg';
import './App.css';

import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primo esercizio con React
        </p>

        <ButtonComponent text="Prova a cliccarmi" href="https://reactjs.org" />
        <br></br>
        <ImageComponent src="wallpaper.png" alt="logo" width="800px" />

      </header>
    </div>
  );
}

export default App;
