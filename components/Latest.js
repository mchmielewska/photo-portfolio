import SingleGalleryPost from './SingleGalleryPost';

const Latest = (props) => {
  const galleries = props.galleries;
  return (
    <div className="latest-section">
      <div className="heading">
        <p>take a quick look at</p>
        <h3>my recent work</h3>
      </div>
      <div className="latest-gallery">
        {galleries.map((singleGallery) => (
          <SingleGalleryPost  key={singleGallery.id} {...singleGallery} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
