import Link from "next/link";
interface CtaButtonProps {
  title: string;
  goto: string;
}
const CtaButton = ({ title, goto }: CtaButtonProps) => {
  return (
    <div>
      <Link href={goto} className="btn btn-success">
        {title}
        {/* <i className="bi bi-arrow-right-circle"></i> */}
      </Link>
    </div>
  );
};

export default CtaButton;
