import Head from 'next/head';
import Quote from '../components/Quote';
import PortfolioFullGallery from '../components/PortfolioFullGallery';
import BottomMenu from '../components/BottomMenu';
import Navbar from '../components/Navbar';

export default function Home({ galleries }) {
  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <div className="single-gallery">
        <Navbar />
        <Quote />
      </div>
      <PortfolioFullGallery />
      <BottomMenu />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/galleries');
  const galleries = await res.json();
  return {
    props: {
      galleries,
    },
  };
}
