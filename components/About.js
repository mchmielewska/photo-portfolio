import Link from 'next/link';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-heading" alt="photographer">
        <h3>I'm Monika</h3>
        <h4>the one behind the camera</h4>
        <Link href="/about">
          <a className="button">read more</a>
        </Link>
      </div>
      <div className="about-description">
        <p>
          I'm originally from Poland - I speak Polish, English and basics of
          German. I am based in Munich, but I love to travel and visit new
          places to capture intimate moments and create memories.
          <br></br>
          <br></br>
          I will be glad to tell your story through my eyes and my
          camera.
        </p>
      </div>
    </div>
  );
};

export default About;
