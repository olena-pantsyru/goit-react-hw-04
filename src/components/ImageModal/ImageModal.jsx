import styles from "./ImageModal.module.css";

export default function ImageModal({ image, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={image} alt="Large view" />
      </div>
    </div>
  );
}