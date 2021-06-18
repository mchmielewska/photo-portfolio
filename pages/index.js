import Head from 'next/head';
import About from '../components/About';
import Quote from '../components/Quote';
import Gallery from '../components/Gallery';
import Latest from '../components/Latest';
import Pricing from '../components/Pricing';
import Featured from '../components/Featured';
import Instagram from '../components/InstagramFeed';
import BottomMenu from '../components/BottomMenu';
import Navbar from '../components/Navbar';

export default function Home({ galleries }) {
  let latestGalleries = [];
  if (galleries) {
    let count = 0;
    for (let i = galleries.length - 1; i >= 0; i--) {
      if (count < 3) {
        latestGalleries.push(galleries[i]);
        count++;
      } else return;
    }
  }

  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <Navbar />
      <div id="main-image"></div>
      <Quote />
      <About />
      <Gallery />
      <Latest galleries={latestGalleries} />
      <Pricing />
      <Featured />

      <BottomMenu />
      {/* <Instagram /> */}
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
