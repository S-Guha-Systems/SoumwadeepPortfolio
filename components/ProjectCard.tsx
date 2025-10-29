import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  title: string;
  desc: string;
  githublink?: string;
  domainlink?: string;
  imgUrl: StaticImageData | string;
}
const ProjectCard = ({
  title,
  desc,
  imgUrl,
  githublink,
  domainlink,
}: ProjectCardProps) => {
  return (
    <div>
      <div className="card">
        <Image src={imgUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text lh-lg">{desc}</p>
          <div className="d-flex justify-content-between gap-2">
            <Link href={githublink || "#"} className="btn btn-info">
              <i className="bi bi-github"></i>
            </Link>
            <Link href={domainlink || "#"} className="btn btn-warning">
              <i className="bi bi-globe2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
