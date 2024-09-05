import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import LandingText from "./components/LandingText";
import MusicDashboard from "./components/MusicDashboard";
import TwitterDashboard from "./components/TwitterDashboard";
import HireMe from "./components/HireMe";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#1a1b26] text-[#a9b1d6]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow container mx-auto px-4">
                <LandingText />
                <section id="work">
                  <Work />
                </section>

                <section id="about">
                  <About />
                </section>

                <div className="mt-8">
                  <HireMe />
                </div>
                <div className="mt-8">
                  <TwitterDashboard />
                </div>
                <div className="mt-8 mb-8">
                  <MusicDashboard />
                </div>
              </main>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
