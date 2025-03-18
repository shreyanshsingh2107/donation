import Header from "./components/header";
import HeroSection from "./sections/heroSection";
import Vision from "./sections/Vision";
import Projects from "./sections/projects";
import Quote from "./sections/quote";
import ImageBanner from "./sections/imageBanner";
import Contact from "./sections/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Vision />
      <Projects />
      <Quote />
      <ImageBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
