import Link from 'next/link';

const SingleGallery = (props) => {
  const gallery = props.data;
  const date = new Date(gallery.eventDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const images = gallery.images.map((image) => {
    const imagePath = 'http://localhost:1337' + image.url;
    return <img key={image.id} src={imagePath}></img>;
  });
  return (
    <div className="gallery-container">
      <h4>{gallery.title}</h4>
      <h5>
        {gallery.location} | {date}
      </h5>

      <div className="gallery-images">{images}</div>
    </div>
  );
};

export default SingleGallery;
