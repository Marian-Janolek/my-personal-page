import GoogleMapReact from 'google-map-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { MdAlternateEmail } from 'react-icons/md';
import marker from '../assets/marker.png';

const Marker = (props) => {
  return (
    <WrapperMap>
      <motion.div
        className="marker"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'tween', delay: 0.7 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        <img src={marker} alt="marker" />
      </motion.div>
    </WrapperMap>
  );
};

const Map = () => {
  const me = { lat: 49.409348, lng: 19.478694 };

  const defaultProps = {
    center: {
      lat: 49.403675,
      lng: 19.483103,
    },

    zoom: 15,
  };

  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'tween' }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={(map) => ({
          mapTypeId: map.MapTypeId.SATELLITE,
          zoomControl: false,
          fullscreenControl: false,
        })}
      >
        <Marker lat={me.lat} lng={me.lng} />
      </GoogleMapReact>
      <motion.div
        className="card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'tween' }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
      >
        <span>Marian Janolek</span>
        <span>029 01 Namestovo</span>
        <br />
        <span className="mail">
          <span>
            <MdAlternateEmail />
          </span>{' '}
          m.janolek@gmail.com
        </span>
      </motion.div>
    </Wrapper>
  );
};

const WrapperMap = styled.div`
  .marker {
    position: absolute;
  }
  .marker img {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 768px) {
    .marker img {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  @media (max-width: 420px) {
    .marker img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;

  .card {
    position: absolute;
    bottom: 5%;
    right: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 1rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #000000b2;
    color: var(--secondary-color);
    z-index: 1;
  }
  .mail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 420px) {
    .card {
      padding: 0.7rem;
      right: 0.5rem;
    }
  }
  @media (max-width: 340px) {
    .card {
      padding: 0.5rem;
      right: 0.25rem;
      font-size: 0.8rem;
    }
  }
`;
export default Map;
