import Head from 'next/head';
import BottomMenu from '../../components/BottomMenu';
import SingleGallery from '../../components/SingleGallery';
import Navbar from '../../components/Navbar';
import Quote from '../../components/Quote';

export default function Home({ gallery }) {
  const galleryProps = gallery[0];
  return (
    <>
      <Head>
        <title>
          {gallery.title} - Monika Chmielewska - Munich based photographer
        </title>
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
  const res = await fetch('http://localhost:1337/galleries/');
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
  console.log(params);
  const galleryName = params.gallery.toString();
  console.log(galleryName);
  const res = await fetch(
    `http://localhost:1337/galleries?gallery=${galleryName}`
  );
  const gallery = await res.json();
  return {
    props: {
      gallery,
    },
  };
}
