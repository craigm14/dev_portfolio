import "./index.css";
import Banner from "./components/Hero/Banner";
import About from "./components/About/about";
import Card from "./components/projects/card";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/Footer";
import Stack from "./components/Stack/Stack";
function App() {
  return (
    <div className="">
      <Banner />
      <About />
      <Card />
      <Experience />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
