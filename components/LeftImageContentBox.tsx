import Image, { StaticImageData } from "next/image";

interface LeftImageContentBoxProps {
  title?: string;
  subtitle?: string;
  content?: string;
  imgUrl?: StaticImageData | string;
  ctaComponent?: React.ReactNode;
  ctaComponent2?: React.ReactNode;
}

const LeftImageContentBox = ({
  title = "",
  subtitle = "",
  content = "",
  imgUrl,
  ctaComponent,
  ctaComponent2,
}: LeftImageContentBoxProps) => {
  return (
    <div className="container my-3">
      <div className="row align-items-center">
        {/* Left Image Section */}
        {imgUrl && (
          <div className="col-sm-6 text-center">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image
                    src={imgUrl}
                    alt={title || "Image"}
                    placeholder="blur"
                    id="animateimg2"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right Text Section */}
        <div className={imgUrl ? "col-sm-6" : "col-12 text-center"}>
          <div className="outer">
            <div className="middle">
              <div className="inner">
                {title && <h1 className="fw-bold mt-4 mb-3">{title}</h1>}
                {subtitle && <h3 className="mb-3 fst-italic">{subtitle}</h3>}
                {content && <p className="lh-base fs-5">{content}</p>}
                {(ctaComponent || ctaComponent2) && (
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {ctaComponent && <div>{ctaComponent}</div>}
                    {ctaComponent2 && <div>{ctaComponent2}</div>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageContentBox;
