import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBarMobile from './components/NavBarMobile';
import MobileBanner from './components/MobileBanner';
import MobileSkills from './components/MobileSkills';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="App">
      {isMobile ? (
        <>
          <NavBarMobile />
          <MobileBanner />
          <MobileSkills />
        </>
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
        </>
      )}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
