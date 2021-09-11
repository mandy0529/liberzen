import React, {useState, useEffect} from 'react';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;

function ShopItem() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);

  const fetchImages = async () => {
    setLoading(true);
    const urlPage = `&page=${page}`;
    try {
      const response = await fetch(`${mainUrl}${clientID}${urlPage}`);
      const data = await response.json();
      console.log(data, '데이터');
      setPhotos((oldPhotos) => {
        if (oldPhotos.length === 30) {
          return [...oldPhotos];
        }
        return [...oldPhotos, ...data];
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="photos">
      <h1 className="shop-title">Liberzen</h1>
      <div className="photos-center">
        {photos.map((image, index) => {
          const {
            urls: {regular},
            alt_description,
          } = image;
          return (
            <div className="photo">
              <img src={regular} alt={alt_description} className="shop-img" />
              <div className="photo-info">
                <p>liberzen</p>
              </div>
            </div>
          );
        })}
      </div>
      {loading && <h2 className="loading">Liberzen</h2>}
    </section>
  );
}

export default ShopItem;
