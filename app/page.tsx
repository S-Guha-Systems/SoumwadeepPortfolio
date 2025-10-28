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
        ctaComponent={<CtaButton title="Know Me" goto="/about" />}
        ctaComponent2={null}
      />
    </>
  );
};

export default Home;
