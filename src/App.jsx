import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Acknowledgements from "./components/Acknowledgements";
// import Demo from "./components/Demo";
import CodeEditor from "./components/Editor";
import Teams from "./components/Team";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Acknowledgements />
        <Teams />
        <Roadmap />
        <Benefits />
        {/* <Collaboration /> */}
        {/* <Demo /> */}
        {/* <Pricing /> */}
        <CodeEditor />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
