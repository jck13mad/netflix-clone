// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


function App() {
  return (
    <div className="app">
      <div className="nav false">
        <img 
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <img 
          className="nav__avatar"
          src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
          alt=""
        />
      </div>

      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">Ginny &amp; Georgia</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner_description">
            Angsty and awkward fifteen year old Ginny Miller often feels more
            mature than her thirty year old mother, the irresistible and dynamic
            Georgia Miller...
          </h1>
        </div>
        <div className="banner--fadebottom"></div>
      </header>
    </div>
  )
}

export default App;