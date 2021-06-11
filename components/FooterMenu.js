import Link from 'next/link';

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="col" id="menu">
        <h5>Monika Chmielewska</h5>
        <p className="heading">portrait & occasional photography</p>
        <ul>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>faq</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>photos</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col" id="contact-details">
        <ul>
          <li className="title">location</li>
          <li className="details">Munich, Germany</li>
          <li className="title">phone</li>
          <li className="details">+49 162 545 9153</li>
          <li className="title">e-mail</li>
          <li className="details">moniika.chmielewska@gmail.com</li>
        </ul>
      </div>
      <div className="col" id="contact">
        <h5>get in touch</h5>
        <Link href="/contact">
          <a className="button">view more</a>
        </Link>
      </div>
    </div>
  );
};

export default FooterMenu;
