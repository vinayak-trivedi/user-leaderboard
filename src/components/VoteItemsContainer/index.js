import { useEffect, useState } from 'react';
import VotesDisplayItem from '../VotesDisplayItem';
import { getVotes } from '../../api/votes';
import { motion } from 'framer-motion';
import styles from './voteItemsContainer.module.css';

export default function VoteItemsContainer() {
  const [votes, setVotes] = useState([]);
  const votesItems = votes?.map((vote) => (
    <motion.li
      key={vote.userId}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      layout
      transition={{ duration: 0.5 }}
      style={{ listStyleType: 'none', }}
    >
      <VotesDisplayItem
        key={vote.userId}
        votes={vote.votes}
        userId={vote.userId}
      />
    </motion.li>
  ));

  function updateVotesArray() {
    const { data } = getVotes();
    setVotes(data);
  }

  useEffect(() => {
    updateVotesArray();
  }, []);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      updateVotesArray();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <ul className={styles['vote-item-container']}>{votesItems}</ul>;
}
