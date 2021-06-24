import Link from 'next/link';

const SingleGalleryPost = (props) => {
  const imgSource = 'http://localhost:1337' + props.mainImage.url;
  const url = `/${props.sessionCategory}/${props.gallery}`;
  const date = new Date(props.eventDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return (
    <Link href={url}>
      <div className="gallery-item">
        <img src={imgSource}></img>
        <h4>{props.sessionCategory}</h4>

        <a>
          <h5>{props.title}</h5>
        </a>
        <h6 className="post-details">
          {props.location} | {date}
        </h6>
      </div>
    </Link>
  );
};

export default SingleGalleryPost;
