import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const Instagram = () => {
  const token =
    'IGQVJYN2htaU9JcUlqUnducnh6TGpnLVlmam9VZAl9YRTIxc3gxWW1jekNzckdwSkhvemQtZAUNRZAk1CenZAsLTBpcVlvWkFONnVPX0szaWRpMWx4aTRPc0s4WExlbjJnRlgwdzVLWFVDeGhFNUU1d0RfbQZDZD';

  return (
    <div id="instagram-feed">
      <h5>Follow me on Instagram</h5>
      <div className="feed">
        <InstagramFeed token={token} counter="6" />
      </div>
    </div>
  );
};

export default Instagram;
