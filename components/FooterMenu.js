import Link from 'next/link';

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="col">
        <h5>photography</h5>
        <ul>
          <li>weddings</li>
          <li>couples</li>
          <li>family</li>
          <li>portraits</li>
        </ul>
      </div>
      <div className="col">
        <h5>about</h5>
        <ul>
          <li>who is Monika</li>
          <li>info & pricing</li>
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
