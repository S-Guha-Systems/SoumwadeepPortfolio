import CtaButton from "@/components/CtaButton";
import LeftImageContentBox from "@/components/LeftImageContentBox";
import homepic from "@/img/homepic.jpg";

const Home = () => {
  return (
    <>
      <LeftImageContentBox
        title="Hi, I’m Soumwadeep Guha 👋"
        subtitle="Crafting Scalable Web Experiences with Code & Creativity"
        content="I’m a passionate Software & Full-Stack Developer with over 2.5 years of experience building modern, high-performance web applications. Skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase, and AWS, I focus on creating elegant, efficient, and user-friendly solutions that make technology feel simple and smart."
        imgUrl={homepic}
        ctaComponent={
          <CtaButton
            title="View My Projects"
            goto="/projects"
            size=""
            color="outline-primary"
          />
        }
        ctaComponent2={
          <CtaButton
            title="Contact Me"
            goto="/contact"
            size=""
            color="outline-success"
          />
        }
      />
      <h1 className="text-center mt-5">
        Turning Ideas Into Impactful Digital Solutions
      </h1>
      {/* <h3 className="text-center fst-italic mb-4">Your Vision, My Code</h3> */}
      <p className="text-center lh-base fs-5">
        My journey began with a deep curiosity for how technology can solve
        real-world problems. Over time, that passion evolved into full-stack
        expertise — from building pixel-perfect frontends to designing optimized
        backends. I’ve had the opportunity to work on diverse projects that
        blend creativity, logic, and innovation.
      </p>
      <div className="quick-facts">
        <div className="fact delay-1 fs-5 fst-italic">
          🏆 Smart India Hackathon Winner
        </div>
        <div className="fact delay-2 fs-5 fst-italic">
          🥇 Top-10 Finalist at GSMA Hackathon
        </div>
        <div className="fact delay-3 fs-5 fst-italic">
          🥈 Top-10 Finalist at IIT HackFest
        </div>
        <div className="fact delay-4 fs-5 fst-italic">
          🎤 Tech Speaker & Community Contributor
        </div>
      </div>
      <center>
        <CtaButton
          title="Learn more about me"
          goto="/about"
          color="outline-info"
          size=""
        />
      </center>
    </>
  );
};

export default Home;
