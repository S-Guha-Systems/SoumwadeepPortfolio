import Image, { StaticImageData } from "next/image";

interface RightImageContentBoxProps {
  title: string;
  subtitle: string;
  content: string;
  imgUrl: StaticImageData | string;
  ctaComponent?: React.ReactNode;
  ctaComponent2?: React.ReactNode;
}

const RightImageContentBox = ({
  title,
  subtitle,
  content,
  imgUrl,
  ctaComponent,
  ctaComponent2,
}: RightImageContentBoxProps) => {
  return (
    <div className="container my-3">
      <div className="row align-items-center">
        {/* Right Image Section */}
        <div className="col-sm-6">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1 className="fw-bold mb-3">{title}</h1>
                {subtitle && <h3 className="mb-3 fst-italic">{subtitle}</h3>}
                <p className="lh-base fs-5">{content}</p>
                {ctaComponent && <div className="mt-3">{ctaComponent}</div>}
                {ctaComponent2 && <div className="mt-3">{ctaComponent2}</div>}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-center mt-2">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <Image
                  src={imgUrl}
                  alt={title}
                  placeholder="blur"
                  id="animateimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageContentBox;
