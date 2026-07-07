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
        Computer Science Student @ Virginia Tech
      </h2>


      <p className="description">
        I build software projects focused on AI,
        web development, and problem solving.
      </p>


      <div className="buttons">

        <button>
          Resume
        </button>

        <button>
          GitHub
        </button>

      </div>

    </section>
  );
}

export default Hero;