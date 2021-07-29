import Head from 'next/head';
import BottomMenu from '../../components/BottomMenu';
import SingleGallery from '../../components/SingleGallery';
import Navbar from '../../components/Navbar';
import Quote from '../../components/Quote';
import { getStrapiPathForGalleries as strapiPath } from '../../utils/path';

export default function Home({ gallery }) {
  const galleryProps = gallery[0];

  console.log(galleryProps);

  const galleryPath = 'https://monikachmielewska.com/' + galleryProps.gallery;
  const galleryName =
    galleryProps.title +
    ' - ' +
    galleryProps.sessionCategory.substring(
      0,
      galleryProps.sessionCategory.length - 1
    ) +
    ' photography';
  const galleryTitle =
    galleryName + ' | Monika Chmielewska - Munich based photographer';
  const galleryDescription =
    'I love to capture intimate moments and create memories. I will be glad to tell your story through my eyes and my camera.';

  return (
    <>
      <Head>
        <title>{galleryTitle}</title>
        <meta name="description" content={galleryDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={galleryTitle} />
        <meta property="og:description" content={galleryDescription} />
        <meta property="og:url" content={galleryPath} />
      </Head>
      <div className="single-gallery">
        <Navbar />
        <Quote />
      </div>

      <SingleGallery data={galleryProps} />
      <BottomMenu />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(strapiPath);
  const galleries = await res.json();
  const paths = galleries.map((singleGallery) => ({
    params: {
      gallery: singleGallery.gallery.toString(),
      category: singleGallery.sessionCategory.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const galleryName = params.gallery.toString();
  const galleryPath = strapiPath + `?gallery=${galleryName}`;
  const res = await fetch(galleryPath);
  const gallery = await res.json();
  return {
    props: {
      gallery,
    },
  };
}
