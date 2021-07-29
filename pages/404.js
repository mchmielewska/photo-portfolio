import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Quote from '../components/Quote';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <div className="single-gallery">
        <Navbar />
        <Quote />
      </div>
      <div className="not-found">
        <h3>That page cannot be found.</h3>
        <p>
          <Link href="/">
            <a className="button">Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
