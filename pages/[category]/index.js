import Head from 'next/head';
import BottomMenu from '../../components/BottomMenu';
import Navbar from '../../components/Navbar';
import Quote from '../../components/Quote';
import SingleGalleryPost from '../../components/SingleGalleryPost';
import { getStrapiPathForGalleries as strapiPath } from '../../utils/path';

export default function Home({ galleries, category }) {
  galleries.sort(
    (galleryA, galleryB) =>
      new Date(galleryB.eventDate) - new Date(galleryA.eventDate)
  );

  const categoryPath = 'https://monikachmielewska.com/' + category;
  const categoryName =
    category.substring(0, 1).toUpperCase() + category.substring(1);
  const pageTitle =
    categoryName + ' | Monika Chmielewska - Munich based photographer';
  const categoryDescription =
    categoryName +
    ' photograpy - Munich & Bavaria. I love to capture intimate moments and create memories. I will be glad to tell your story through my eyes and my camera.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={categoryDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={categoryDescription} />
        <meta property="og:url" content={categoryPath} />
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
  const res = await fetch(strapiPath);
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
  const res = await fetch(strapiPath + `?sessionCategory=${galleryCategory}`);
  const galleries = await res.json();
  return {
    props: {
      galleries,
      category: galleryCategory,
    },
  };
}
