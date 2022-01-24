import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import ScrollDown from '../components/ScrollDown';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <div className="wrapper-p" style={{ paddingTop: '0rem' }}>
      <Hero />
      <About />
      <Portfolio />
      <ScrollDown right="-2rem" />
      <Timeline />
      <Contact />
    </div>
  );
};

export default Home;
