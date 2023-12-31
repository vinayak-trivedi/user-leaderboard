import styles from './votesDisplayItem.module.css';

export default function VotesDisplayPresentation({ userImage, votes, username }) {
  return (
    <div className={styles.votes_display_item}>
      <div className={styles.user_details}>
        <img src={userImage} className={styles.user_image} alt='' />
        <p className={styles.username}>{username}</p>
      </div>
      <p className={styles.votes_text}>{votes}</p>
    </div>
  )
}