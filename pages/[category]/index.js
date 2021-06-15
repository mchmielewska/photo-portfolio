import Head from 'next/head';
import BottomMenu from '../../components/BottomMenu';
import Navbar from '../../components/Navbar';
import Quote from '../../components/Quote';
import SingleGalleryPost from '../../components/SingleGalleryPost';

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
      <div className="latest-section">
        <div className="latest-gallery">
          {galleries.map((singleGallery) => (
            <SingleGalleryPost key={singleGallery.id} {...singleGallery} />
          ))}
        </div>
      </div>

      <BottomMenu />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/galleries/');
  const galleries = await res.json();
  const paths = galleries.map((singleGallery) => ({
    params: {
      category: singleGallery.sessionCategory.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const galleryCategory = params.category.toString();
  const res = await fetch(
    `http://localhost:1337/galleries?sessionCategory=${galleryCategory}`
  );
  const galleries = await res.json();
  return {
    props: {
      galleries,
    },
  };
}
