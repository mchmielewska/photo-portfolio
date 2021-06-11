import Link from 'next/link';

const Latest = (props) => {
  const galleries = props.galleries;
  console.log(galleries);
  return (
    <div className="latest-section">
      <div className="heading">
        <p>take a quick look at</p>
        <h3>my recent work</h3>
      </div>
      <div className="latest-gallery">
        {galleries.map((gallery) => {
          const imgSource = 'http://localhost:1337' + gallery.mainImage.url;
          return (
            <div key={gallery.id} className="gallery-item">
              <img src={imgSource}></img>
              <h4>weddings</h4>
              <h5>{gallery.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
