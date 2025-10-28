import CtaButton from "@/components/CtaButton";
import RightImageContentBox from "@/components/RightImageContentBox";
import notfound from "@/img/notfound.jpg";

const NotFound = () => {
  return (
    <RightImageContentBox
      title="Oops! Page Not Found"
      subtitle=""
      content="The page you are looking for does not exist or is being updated."
      imgUrl={notfound}
      ctaComponent={<CtaButton title="Go Home" goto="/" />}
      ctaComponent2={null}
    />
  );
};

export default NotFound;
