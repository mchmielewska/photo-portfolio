import Head from 'next/head';
import Navbar from '../components/Navbar';
import BottomMenu from '../components/BottomMenu';
import Quote from '../components/Quote';

export default function Home({ offers, weddingOffers }) {
  const weddingOffersDetails = weddingOffers
    ? weddingOffers.map((singleOffer) => (
        <div className="single-offer" key={singleOffer.id}>
          <h5>{singleOffer.offerName}</h5>
          <p>{singleOffer.offerDetails}</p>
          <h5>{singleOffer.price} €</h5>
        </div>
      ))
    : null;

  const otherOffersDetails = offers
    ? offers.map((singleOffer) => (
        <div className="single-offer" key={singleOffer.id}>
          <h5>{singleOffer.offerName}</h5>
          <p>{singleOffer.offerDetails}</p>
          <h5>{singleOffer.price} €</h5>
        </div>
      ))
    : null;
  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <div className="single-gallery">
        <Navbar />
        <Quote />
      </div>
      <div className="pricing-page">
        <div className="offers">
          <h4>Wedding packages</h4>
          {weddingOffersDetails}
          <h4>Other</h4>
          <p className="description">
            portrait / pregnancy / family / couples / pre & after - wedding
          </p>
          {otherOffersDetails}
        </div>
      </div>
      <BottomMenu />
    </>
  );
}

export async function getStaticProps() {
  const resWeddings = await fetch('http://localhost:1337/offers');
  const weddingOffers = await resWeddings.json();

  const resOthers = await fetch('http://localhost:1337/other-offers');
  const offers = await resOthers.json();

  return {
    props: {
      weddingOffers,
      offers,
    },
  };
}
