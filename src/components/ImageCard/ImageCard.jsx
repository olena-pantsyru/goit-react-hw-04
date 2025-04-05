import styles from "./ImageCard.module.css";

const ImageCard = ({ photo, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
};

export default ImageCard;