import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ onClose, photo }) => {
  if (!photo) return null;

  return (
    <Modal isOpen={true} onRequestClose={onClose} className={styles.modal}>
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <p>{photo.description || "No description available"}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;