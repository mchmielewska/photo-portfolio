import Link from 'next/link';
import { getStrapiPath } from '../utils/path';

const SingleGalleryPost = (props) => {
  const imgSource = getStrapiPath(true, true) + props.mainImage.url;
  const url = `/${props.sessionCategory}/${props.gallery}`;
  const date = new Date(props.eventDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return (
    <Link href={url}>
      <div className="gallery-item">
        <img alt={props.title} src={imgSource} width='100%' height='100%'></img>
        <h4>{props.sessionCategory}</h4>

        <a href={url}>
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
