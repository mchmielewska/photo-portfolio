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
import { getStrapiPathForGalleries as strapiPath } from '../utils/path';

const schemaData = {
  '@context': 'http://schema.org',
  '@type': 'LocalBusiness',
  name: 'Monika Chmielewska - portrait & ocassional photography',
  image:
    'https://portfolio-static.pages.dev/uploads/mariadaniel_aftersession_12_770b222ef1.webp',
  telephone: '+49 1625459153',
  email: 'moniika.chmielewska@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Munich',
    addressRegion: 'Bavaria',
    addressCountry: 'Germany',
    postalCode: '80803',
  },
  url: 'https://monikachmielewska.com/',
};

export default function Home({ galleries }) {
  let latestGalleries = [];
  if (galleries) {
    let count = 0;
    for (let i = galleries.length - 1; i >= 0; i--) {
      if (count < 3) {
        latestGalleries.push(galleries[i]);
        count++;
      }
    }
  }

  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
        <meta
          name="description"
          content="Portrait, family, wedding and event photography- Munich & Bavaria. I love to capture intimate moments and create memories. I will be glad to tell your story through my eyes and my camera."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Monika Chmielewska - Munich based photographer"
        />
        <meta
          property="og:description"
          content="Portrait, family, wedding and event photography- Munich & Bavaria. I love to capture intimate moments and create memories. I will be glad to tell your story through my eyes and my camera."
        />
        <meta property="og:url" content="https://monikachmielewska.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://www.monikachmielewska.com" />
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
  const res = await fetch(strapiPath);
  const galleries = await res.json();
  return {
    props: {
      galleries,
    },
  };
}
