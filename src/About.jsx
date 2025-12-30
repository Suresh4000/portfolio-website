import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h3 className="sub-title">About Me</h3>
        <h1 className="title">Described Briefly My Professional<br></br>
Background Skills and Accomplishments</h1>
      </div>
      <div className="about-row">

        <div className="about-col about-left">
          <img src="./about.jpg"/>
        </div>

        <div className="about-col about-right">
          <h3>Hello ! I'm Professorial UI UX Designer Providing awesome cool design stuff for client. My vision is to satisfy my client</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.
</p>
        </div>

      </div>
    </div>
  );
};

export default About;
