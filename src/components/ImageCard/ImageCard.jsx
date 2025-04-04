import styles from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <li className={styles.card} onClick={() => onClick(image.urls.regular)}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
    </li>
  );
}