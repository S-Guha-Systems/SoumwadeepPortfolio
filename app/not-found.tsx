import RightImageContentBox from "@/components/RightImageContentBox";
import notfound from "@/img/notfound.jpg";

const NotFound = () => {
  return (
    <RightImageContentBox
      title="Oops! Page Not Found"
      content="The page you are looking for does not exist or is being updated."
      imgUrl={notfound}
    />
  );
};

export default NotFound;
