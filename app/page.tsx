import CtaButton from "@/components/CtaButton";
import LeftImageContentBox from "@/components/LeftImageContentBox";
import RightImageContentBox from "@/components/RightImageContentBox";
import homepic from "@/img/homepic.jpg";
import logost from "@/img/logost.png";

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
      <center>
        <CtaButton
          title="Learn more about me"
          goto="/about"
          color="outline-info"
          size=""
        />
      </center>
      <RightImageContentBox
        title="Experience Highlights"
        subtitle=""
        content="Over the past few years, I’ve contributed to multiple impactful software projects and startups — developing end-to-end web solutions, integrating cloud services, and optimizing performance for modern digital products. I specialize in full stack development, system design, and cloud integration.Currently, I am a Software Developer at Swan Fintech Pvt. Ltd., where I help build scalable web applications that drive business growth and enhance user experiences."
        imgUrl={logost}
        ctaComponent={
          <CtaButton
            title="View my experience"
            goto="/experience"
            size=""
            color="outline-warning"
          />
        }
      />
      {/* <h1 className="text-center mt-5">🧠 Featured Projects</h1>
      <div className="text-center mb-4 fst-italic">

      </div> */}

      {/* <div className="quick-facts">
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
      </div> */}
    </>
  );
};

export default Home;
