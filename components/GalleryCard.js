import Link from 'next/link';

const GalleryCard = (props) => {
  const path = `/${props.categoryName}`;
  const imgPath = `${props.categoryName}.webp`;
  return (
    <Link href={path}>
      <a>
        <div id={props.categoryName} className="gallery-card">
          <div>
            <img alt={props.categoryName} src={imgPath} width="400" height="500"></img>
          </div>
          <div className="details">
            <div>
              <h5>{props.categoryName}</h5>
              <p>{props.subtitle}</p>
            </div>
            <svg>
              <path
                d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
	v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
	c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GalleryCard;
