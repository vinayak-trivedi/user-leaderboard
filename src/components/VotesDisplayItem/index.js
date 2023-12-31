import { getUserDetails } from '../../api/users';
import VotesDisplayPresentation from './Presentation';

export default function VotesDisplayItem({ votes, userId }) {
  const { data: user } = getUserDetails(userId);

  return (
    <VotesDisplayPresentation
      votes={votes}
      userImage={user.displayPic}
      username={user.username}
    />
  );
}
