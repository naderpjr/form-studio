import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Studio from "./components/Studio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Studio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}