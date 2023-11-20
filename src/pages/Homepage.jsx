import LandingPage from "../components/LandingPage.jsx";
import Portfolio from "../components/Portfolio.jsx";
import AboutMe from "../components/AboutMe.jsx";
import ContactMe from "../components/ContactMe.jsx";

export default function App() {
  return (
    <>
      <div className=" w-[320px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px]">
        <LandingPage />
        <Portfolio />
        <AboutMe />
        <ContactMe />
      </div>
    </>
  );
}
