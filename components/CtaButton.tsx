import Link from "next/link";

interface CtaButtonProps {
  title?: string;
  goto?: string;
  color?: string;
  size?: string;
}

const CtaButton = ({
  title = "Learn More",
  goto = "#",
  color = "primary",
  size = "",
}: CtaButtonProps) => {
  return (
    <Link
      href={goto}
      className={`btn btn-${color} ${size ? `btn-${size}` : ""} mb-2`}
    >
      {title}
    </Link>
  );
};

export default CtaButton;
