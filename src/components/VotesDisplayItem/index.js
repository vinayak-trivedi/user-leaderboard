import { getUserDetails } from '../../api/users';
import VotesDisplayPresentation from './Presentation';

export default function VotesDisplayItem({ votes, userId }) {
  const data = getUserDetails(userId);

  return (
    <VotesDisplayPresentation votes={votes} userImage={data.data.displayPic} />
  );
}
