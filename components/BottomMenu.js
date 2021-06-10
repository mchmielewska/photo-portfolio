import Link from 'next/link';

const BottomMenu = () => {
  return (
    <div id="bottom-menu">
      <div>
        <Link href="/about">
          <a>
            <p className="first-line">read more</p>
            <p className="second-line">about me</p>
          </a>
        </Link>
      </div>

      <div className="center">
        <Link href="/portfolio">
          <a>
            <p className="first-line">view</p>
            <p className="second-line">my portfolio</p>
          </a>
        </Link>
      </div>

      <div>
        <Link href="/pricing">
          <a>
            <p className="first-line">details in</p>
            <p className="second-line">my pricing</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BottomMenu;
