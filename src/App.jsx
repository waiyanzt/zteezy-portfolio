import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import LandingText from "./components/LandingText";
import MusicDashboard from "./components/MusicDashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#1a1b26] text-[#a9b1d6]">
        <Navbar />

        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingText />
                  <section id="work" className="py-10">
                    <h2 className="text-2xl font-bold mb-4">My Work</h2>
                    {/*Add your projects here*/}
                  </section>
                  <section id="about" className="py-10">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    {/*Add your about content here*/}
                  </section>
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <MusicDashboard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
