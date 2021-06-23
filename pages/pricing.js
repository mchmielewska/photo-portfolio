import Head from 'next/head';
import Navbar from '../components/Navbar';
import BottomMenu from '../components/BottomMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Monika Chmielewska - Munich based photographer</title>
      </Head>
      <Navbar />
      <div id="main-image-pricing"></div>
      <div className="about-section">
      <div className="about-heading" alt="photographer">
        <h3>I'm Monika</h3>
        <h5>the one behind the camera</h5>
      </div>
      <div className="about-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pellentesque tempus ex. Mauris suscipit felis non libero varius, in
          viverra mauris ultricies. Nullam interdum accumsan ante. Quisque
          dictum dignissim pellentesque. Ut quis nisl non sem bibendum lacinia.
          Fusce nisl enim, consequat quis fringilla in, pretium non purus. Fusce
          laoreet venenatis turpis ac auctor. Integer pellentesque, nulla vel
          tempus interdum, purus nisl porttitor elit, eget placerat neque sapien
          in nisi.
        </p>
      </div>
    </div>
    <BottomMenu />
    </>
  );
}