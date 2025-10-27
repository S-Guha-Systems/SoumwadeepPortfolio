import LeftImageContentBox from "@/components/LeftImageContentBox";
import homepic from "@/img/homepic.jpg";

const Home = () => {
  return (
    <>
      <LeftImageContentBox
        title="Welcome to My Portfolio"
        content="Discover my projects, skills, and experiences as a Full-Stack Developer. Explore my journey in building smart, scalable web applications using Next.js, React, PostgreSQL, Firebase, and AWS."
        imgUrl={homepic}
      />
    </>
  );
};

export default Home;
