import Head from 'next/head';
import About from '../components/About';
import Quote from '../components/Quote';
import Gallery from '../components/Gallery';
import Latest from '../components/Latest'
import Pricing from '../components/Pricing';
import BottomMenu from '../components/BottomMenu';

export default function Home() {

  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <div id="main-image">
      </div>
      <Quote />
      <About />
      <Gallery />
      <Latest />
      <Pricing />
      <BottomMenu />
    </>
  );
}
