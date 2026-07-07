import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import "./styles/app.css";
import "./styles/sections.css";


function App() {
  return (
    <main className="page">

      <div className="ide-window">


        <div className="ide-header">

          <div className="window-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <p>welcome-to-my-site.jsx</p>

        </div>


        <div className="ide-body">

          <Sidebar />


          <section className="content">

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />

          </section>

        </div>

      </div>

    </main>
  );
}


export default App;