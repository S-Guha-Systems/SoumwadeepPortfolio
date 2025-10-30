import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title?: string;
  desc?: string;
  githublink?: string;
  domainlink?: string;
  imgUrl?: StaticImageData | string;
}

const ProjectCard = ({
  title = "Project",
  desc = "No description provided yet.",
  imgUrl,
  githublink,
  domainlink,
}: ProjectCardProps) => {
  return (
    <div className="card h-100 shadow-lg">
      {imgUrl && <Image src={imgUrl} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text lh-lg">{desc}</p>
        </div>
        <div className="d-flex justify-content-between gap-2 mt-3">
          {githublink ? (
            <Link href={githublink} className="btn btn-info">
              <i className="bi bi-github"></i>
            </Link>
          ) : (
            <button className="btn btn-outline-secondary" disabled>
              <i className="bi bi-github"></i>
            </button>
          )}
          {domainlink ? (
            <Link href={domainlink} className="btn btn-warning">
              <i className="bi bi-globe2"></i>
            </Link>
          ) : (
            <button className="btn btn-outline-secondary" disabled>
              <i className="bi bi-globe2"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
