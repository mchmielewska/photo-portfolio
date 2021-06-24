import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="menu-links">
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>
        <Link href="/pricing">
          <a>pricing</a>
        </Link>
        <Link href="/contact">
          <a className="button">contact</a>
        </Link>
      </div>
      <div className="heading">
        <h1>Monika Chmielewska</h1>
      </div>
    </nav>
  );
};

export default Navbar;
