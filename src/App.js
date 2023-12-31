import './App.css';
import VoteItemsContainer from './components/VoteItemsContainer';

function App() {
  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <section className="votes-details">
        <header className="votes-details__header">
          <h2>User</h2>
          <p className="votes-details__header-text">Votes</p>
        </header>
        <VoteItemsContainer />
      </section>
    </div>
  );
}

export default App;
