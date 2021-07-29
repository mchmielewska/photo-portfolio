import Head from 'next/head';
import Quote from '../components/Quote';
import PortfolioFullGallery from '../components/PortfolioFullGallery';
import BottomMenu from '../components/BottomMenu';
import Navbar from '../components/Navbar';

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

export default function Home() {
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
