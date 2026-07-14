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