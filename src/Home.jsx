import "./Home.css";

const Home = () => {
  return (
    <div className="global-container">
      <div className="two-column">

        <div className="column left">
          <h3>Hello I'm Suresh !</h3>
          <h1>A WEB <span>DEVELOPR</span></h1>
          <p>Solution-oriented mindset, problem-solving enthusiasm, positive attitude towards challenges, overcoming obstacles with enthusiasm .</p>
<a className="home-button" href="/assets/CV.pdf" download>
  Download CV
</a>
        </div>

        <div className="column right">
            <img src="./banner.jpg"></img>
        </div>

      </div>
    </div>
  );
};

export default Home;
