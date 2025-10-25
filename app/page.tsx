import LeftAlignedContentModel from "@/components/LeftAlignedContentModel";
import homepic from "@/img/homepic.jpg";
const Home = () => {
  return (
    <LeftAlignedContentModel
      title="Crafting Scalable Web Experiences with Code & Creativity"
      body="Hi, I’m Soumwadeep Guha — a passionate Full-Stack Developer skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase, and AWS. I love transforming ideas into elegant, high-performance web apps that blend smart architecture with intuitive design. Explore my journey through projects, hackathon wins, and innovative builds that reflect both logic and creativity."
      imageUrl={homepic}
      addedComponent={null}
    />
  );
};

export default Home;
