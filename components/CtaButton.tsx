import Link from "next/link";
interface CtaButtonProps {
  title: string;
  goto: string;
  color: string;
  size: string;
}
const CtaButton = ({ title, goto, color, size }: CtaButtonProps) => {
  return (
    <div>
      <Link
        href={goto}
        className={`mb-2 btn btn-${color ? color : "success"} ${
          size ? `btn-${size}` : ""
        }`}
      >
        {title}
        {/* <i className="bi bi-arrow-right-circle"></i> */}
      </Link>
    </div>
  );
};

export default CtaButton;
