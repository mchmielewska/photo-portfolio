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
    <div key={props.id} className="gallery-item">
      <img src={imgSource}></img>
      <h4>{props.sessionCategory}</h4>
      <Link href={url}>
        <a>
          <h5>{props.title}</h5>
        </a>
      </Link>
      <h6 className="post-details">
        {props.location} | {date}
      </h6>
    </div>
  );
};

export default SingleGalleryPost;
