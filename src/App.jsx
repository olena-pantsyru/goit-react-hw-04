import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchPhoto } from "./galleryService";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [hasMorePhotos, setHasMorePhotos] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setError(null);
      try {
        const data = await fetchPhoto(query, page);

        if (data.length === 0) {
          if (page === 1) {
            toast("Nothing found", { duration: 3000 });
            setPhotos([]);
          }
          setHasMorePhotos(false);
        } else {
          setPhotos((prev) => (page === 1 ? data : [...prev, ...data]));
          if (data.length < 12) {
            toast("End of collection", { duration: 3000 });
            setHasMorePhotos(false);
          }
        }
      } catch (error) {
        setError("Pls reload page...");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setPhotos([]);
    setHasMorePhotos(true);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} initialQuery={query || ""} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="galleryContainer">
        <ImageGallery photos={photos} onImageClick={handleImageClick} />
      </div>
      {photos.length > 0 && !loading && !loadingMore && hasMorePhotos && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loadingMore && <Loader />}
      <ImageModal onClose={closeModal} photo={selectedPhoto} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;