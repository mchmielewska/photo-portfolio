import Link from 'next/link';

const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="description">
        <p>
          Not sure yet if we're a good fit? That's okay, take your time and keep
          browsing. Want some more details? Send me a message!
        </p>
      </div>
      <div className="heading">
        <h3>pricing</h3>
        <Link href="/pricing">
          <a href="/pricing" className="button">check my packages</a>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
