import CtaButton from "@/components/CtaButton";
import LeftImageContentBox from "@/components/LeftImageContentBox";
import ProjectCard from "@/components/ProjectCard";
import QuickFacts from "@/components/QuickFacts";
import RightImageContentBox from "@/components/RightImageContentBox";
import homepic from "@/img/homepic.jpg";
import logost from "@/img/logost.png";
import about from "@/img/about.jpg";
import achievements from "@/img/achievements.png";
import projects from "@/img/projects.jpg";
import blogs from "@/img/blogs.jpg";
import contact from "@/img/contact.png";
const aboutAchievements = [
  "🏆 Smart India Hackathon Winner",
  "🥇 Top-10 Finalist at GSMA Hackathon",
  "🥈 Top-10 Finalist at IIT HackFest",
  "🎤 Tech Speaker & Community Contributor",
];
const certAchievements = [
  "🏆 Smart India Hackathon Winner",
  "🧩 Top-10 Finalist: GSMA Hackathon & IIT HackFest",
  "🎖️ Top-50 Finalist: Google Solution Challenge",
  "🎓 Certified in Java Programming By IIT Kharagpur",
  "🎓 Certified in Python for Data Science By IIT Madras",
  "🎓 Full Stack Web Development Certification - Udemy",
];
const Home = () => {
  return (
    <>
      {/* Main Hero Section */}
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
      {/* About */}
      <RightImageContentBox
        title="About Me"
        subtitle="Turning Ideas Into Impactful Digital Solutions"
        content="My journey began with a deep curiosity for how technology can solve
          real-world problems. Over time, that passion evolved into full-stack
          expertise — from building pixel-perfect frontends to designing
          optimized backends. I’ve had the opportunity to work on diverse
          projects that blend creativity, logic, and innovation."
        imgUrl={about}
        ctaComponent={<QuickFacts facts={aboutAchievements} />}
        ctaComponent2={
          <CtaButton
            title="Learn more about me"
            goto="/about"
            size=""
            color="outline-info"
          />
        }
      />
      {/* Experience Highlights */}
      <LeftImageContentBox
        title="Professional Experience"
        subtitle="Building Scalable Web Solutions & Driving Innovation"
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
      {/* Featured Projects */}
      <section>
        <h1 className="text-center mt-5">Featured Projects</h1>
        <h3 className="text-center mb-4 fst-italic">Showcasing My Work</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <ProjectCard
              title="National Remote School"
              desc="Description for project 1"
              imgUrl={projects}
              githublink="#"
              domainlink="#"
            />
          </div>
          <div className="col-md-4 mb-4">
            <ProjectCard
              title="Park Wise"
              desc="Description for project 2"
              imgUrl={projects}
              githublink="#"
              domainlink="#"
            />
          </div>
          <div className="col-md-4 mb-4">
            <ProjectCard
              title="AI Mock Interviewer"
              desc="Description for project 3"
              imgUrl={projects}
              githublink="#"
              domainlink="#"
            />
          </div>
          <div className="col-md-4 mb-4">
            <CtaButton
              title="View All Projects"
              goto="/projects"
              color="outline-success"
            />
          </div>
        </div>
      </section>
      {/* Achievements & Certifications */}
      <RightImageContentBox
        title="Achievements & Certifications"
        subtitle="Recognition & Learning Milestones"
        content="I believe continuous learning is key to growth. From national hackathons to online certifications, every experience has sharpened my technical and creative skills."
        imgUrl={achievements}
        ctaComponent={<QuickFacts facts={certAchievements} />}
        ctaComponent2={
          <CtaButton
            title="See all achievements"
            goto="/achievements"
            color="outline-primary"
            size=""
          />
        }
      />
      {/* Blogs and Insights */}
      <LeftImageContentBox
        title="Blogs & Insights"
        subtitle="Thoughts, Learnings & Community Contributions"
        content="I love sharing what I learn — from solving coding challenges to exploring emerging web technologies and community experiences."
        imgUrl={blogs}
        ctaComponent={
          <CtaButton
            title="Read my blogs"
            goto="/blog"
            color="outline-danger"
          />
        }
      />
      {/* Contact */}
      <RightImageContentBox
        title="Contact Me"
        subtitle="Let’s Build Something Amazing Together"
        content="Whether it’s collaborating on an idea, inviting me to a tech talk, or just saying hello — I’d love to connect!"
        imgUrl={contact}
        ctaComponent={
          <CtaButton
            title="Contact Me"
            goto="/contact"
            color="outline-primary"
          />
        }
      />
    </>
  );
};

export default Home;
