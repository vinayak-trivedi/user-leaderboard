import './App.css';
import { getVotes } from './api/votes';
import VotesDisplayItem from './components/VotesDisplayItem';

function App() {
  const { data: votes } = getVotes();
  const votesItems = votes?.map((vote) => (
    <VotesDisplayItem votes={vote.votes} userId={vote.userId} />
  ));
  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <section className="votes-details">
        <header className="votes-details__header">
          <h2>User</h2>
          <p className="votes-details__header-text">Votes</p>
        </header>
        <div className="votes-details__votes-item-container">
          {votesItems}
        </div>
      </section>
    </div>
  );
}

export default App;
