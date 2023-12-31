import { useEffect, useState } from 'react';
import './App.css';
import { getVotes } from './api/votes';
import VotesDisplayItem from './components/VotesDisplayItem';

function App() {
  const [votes, setVotes] = useState([]);
  const votesItems = votes?.map((vote) => (
    <VotesDisplayItem
      key={vote.userId}
      votes={vote.votes}
      userId={vote.userId}
    />
  ));

  useEffect(() => {
    const { data } = getVotes();
    setVotes(data);
  }, []);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      const { data } = getVotes();
      setVotes(data);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <section className="votes-details">
        <header className="votes-details__header">
          <h2>User</h2>
          <p className="votes-details__header-text">Votes</p>
        </header>
        <div className="votes-details__votes-item-container">{votesItems}</div>
      </section>
    </div>
  );
}

export default App;
