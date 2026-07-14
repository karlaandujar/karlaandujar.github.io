import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <p className="terminal">
        &gt; initializing site...
      </p>


      <h1>
        Hi, I'm Karla.
      </h1>


      <h2>
        Honors Computer Science Student @ Virginia Tech
      </h2>


      <div>

        <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
        >
            Resume
        </a>

        <a
            href="https://github.com/karlaandujar"
            target="_blank"
            rel="noreferrer"
            className="github-button"
        >
            GitHub
        </a>

      </div>

    </section>
  );
}

export default Hero;