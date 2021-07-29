import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Quote from '../components/Quote';
import { metaData } from '../utils/metadata';

export default function Home() {
  return (
    <>
      {metaData('contact')}
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
