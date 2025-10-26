import LeftImageContentBox from "@/components/LeftImageContentBox";
import homepic from "@/img/homepic.jpg";
const Home = () => {
  return LeftImageContentBox(
    "Welcome to My Portfolio",
    "Discover my projects, skills, and experiences as a Full-Stack Developer. Explore my journey in building smart, scalable web applications using Next.js, React, PostgreSQL, Firebase, and AWS.",
    homepic
  );
};

export default Home;
