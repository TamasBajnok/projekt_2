import React, { useState, useEffect, useContext } from 'react';
import './Galeria.css';
import { StoreContext } from '../../context/StoreContext';

const Galeria = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [galleryItems, setGalleryItems] = useState([]);

  const {setMenu} = useContext(StoreContext);

  useEffect(() => {
    const loadGalleryItems = () => {
      const items = [
        { id: 1, name: "1", image: "/gallery_images/pic1.jpg" },
        { id: 2, name: "2", image: "/gallery_images/pic2.jpg" },
        { id: 3, name: "3", image: "/gallery_images/pic3.jpg" },
        { id: 4, name: "4", image: "/gallery_images/pic4.jpg" },
        { id: 5, name: "5", image: "/gallery_images/pic5.jpg" },
        { id: 6, name: "6", image: "/gallery_images/pic6.jpg" },
        { id: 7, name: "7", image: "/gallery_images/pic7.jpg" },
      ];
      setGalleryItems(items);
    };

    loadGalleryItems();
    setMenu("gallery");
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > galleryItems.length) return galleryItems.length;
      if (newIndex < 1) return 1;
      return newIndex;
    });
  };

  const currentSlide = (n) => setSlideIndex(n);

  return (
    <div className="gallery-container">
      <div className="title-event">
        <div className="title-event-contents">
          <h2>Galéria</h2>
          <p>Nyerjen betekintést éttermünk világába! A képgalériában megtekintheti éttermünk belső környezetét, illetve rengeteg képet találhat a kínálatunkról.</p>
        </div>
      </div>
      
      <h1 className="gallery-title">Képgaléria</h1>
      <div className="gallery">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img
              src={item.image}
              alt={item.name}
              onClick={() => {
                openModal();
                currentSlide(item.id);
              }}
            />
            <div className="caption">{item.name}</div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div id="myModal" className={`modal ${modalOpen ? 'open' : ''}`}>
          <span className="close cursor" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="mySlides"
                style={{ display: slideIndex === item.id ? 'block' : 'none' }}
              >
                <img
                  src={item.image}
                  style={{ width: '100%' }}
                  alt={item.name}
                />
              </div>
            ))}
            {slideIndex > 1 && (
              <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            )}
            {slideIndex < galleryItems.length && (
              <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
