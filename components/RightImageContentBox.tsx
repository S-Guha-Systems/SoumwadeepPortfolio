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
        {/* Image Section (appears ABOVE text on mobile, RIGHT on desktop) */}
        <div className="col-sm-6 order-1 order-sm-2">
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

        {/* Text Section */}
        <div className="col-sm-6 order-2 order-sm-1">
          <div className="outer">
            <div className="middle">
              <div className="inner text-sm-start">
                <h1 className="fw-bold mt-4 mb-3">{title}</h1>
                {subtitle && <h3 className="mb-3 fst-italic">{subtitle}</h3>}
                <p className="lh-base fs-5">{content}</p>
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-2">
                  {ctaComponent && (
                    <div className="mt-1 mb-1">{ctaComponent}</div>
                  )}
                  {ctaComponent2 && (
                    <div className="mt-1 mb-1">{ctaComponent2}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageContentBox;
