import { VOTES } from '../mocks/votes';

let votes = [...VOTES];

export const getVotes = () => {
  const randomIndex = Math.floor(Math.random() * VOTES.length);
  const randomVotes = Math.floor(Math.random() * 5) + 1;

  const updatedVotes = [...votes];
  updatedVotes[randomIndex] = {
    ...updatedVotes[randomIndex],
    votes: (updatedVotes[randomIndex].votes || 0) + randomVotes,
  };
  votes = updatedVotes;

  return {
    success: true,
    data: updatedVotes.sort((a, b) => b.votes - a.votes),
  };
};

