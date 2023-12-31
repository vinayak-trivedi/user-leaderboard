import styles from './votesDisplayItem.module.css';

export default function VotesDisplayPresentation({ userImage, votes }) {
  return (
    <div className={styles.votes_display_item}>
      <img src={userImage} className={styles.user_image} alt='' />
      <p className={styles.votes_text}>{votes}</p>
    </div>
  )
}