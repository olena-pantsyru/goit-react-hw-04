import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onClick={() => onImageClick(photo)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;