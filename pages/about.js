import Head from 'next/head';
import Instagram from '../components/InstagramFeed';
import Navbar from '../components/Navbar';
import { metaData } from '../utils/metadata';

export default function Home() {
  return (
    <>
      {metaData('about')}
      <Navbar />
      <div id="main-image-about"></div>
      <div className="about-section">
        <div className="about-heading" alt="photographer">
          <h3>I'm Monika</h3>
          <h4>the one behind the camera</h4>
        </div>
        <div className="about-description">
          <p>
            I'm originally from Poland - I speak Polish, English and basics of
            German.
            <br></br>I am based in Munich, but I love to travel and visit new
            places to capture intimate moments and create memories. I will be
            glad to tell your story through my eyes and my camera.
            <br></br>
            Even though I finished technical university and I work as a
            programmer, I have always been drawn to artistic activities. I
            started to work as a photographer more than 5 years ago, firstly
            doing mostly portraits. After the first wedding, I was certain that
            I want to capture all the beautiful momements for people.
          </p>
        </div>
      </div>
      <Instagram />
    </>
  );
}
