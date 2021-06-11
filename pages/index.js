import Head from 'next/head';
import About from '../components/About';
import Quote from '../components/Quote';
import Gallery from '../components/Gallery';
import Latest from '../components/Latest';
import Pricing from '../components/Pricing';
import Featured from '../components/Featured';
import Instagram from '../components/InstagramFeed';
import BottomMenu from '../components/BottomMenu';

export default function Home({ galleries }) {
  console.log(galleries);
  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <div id="main-image"></div>
      <Quote />
      <About />
      <Gallery />
      <Latest galleries={galleries} />
      <Pricing />
      <Featured />

      <BottomMenu />
      {/* <Instagram /> */}
    </>
  );
}

export async function getStaticProps() {
  console.log('Async!');
  const res = await fetch('http://localhost:1337/galleries');
  const galleries = await res.json();
  return {
    props: {
      galleries,
    },
  };
}
