import './App.css';
import GitHubCard from './components/GitHubCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <GitHubCard />
       <h2>Test</h2>
        <ul>
          <li>Test list</li>
        </ul>
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
