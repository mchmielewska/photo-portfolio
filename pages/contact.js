import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Quote from '../components/Quote';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <div className="single-gallery">
        <Navbar />
        <Quote />
      </div>
      <div className="contact-section">
        <ContactForm />
      </div>
    </>
  );
}
