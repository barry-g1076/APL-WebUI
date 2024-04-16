import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Acknowledgements from "./components/Acknowledgements";
import CodeEditor from "./components/Editor";
import Teams from "./components/Team";
// import { Toaster } from "@/components/ui/sonner";
// import { toast } from "sonner";

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
        <CodeEditor />
        {/* <Toaster /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
