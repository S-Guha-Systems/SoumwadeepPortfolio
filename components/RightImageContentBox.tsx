import Image, { StaticImageData } from "next/image";

interface RightImageContentBoxProps {
  title?: string;
  subtitle?: string;
  content?: string;
  imgUrl?: StaticImageData | string;
  ctaComponent?: React.ReactNode;
  ctaComponent2?: React.ReactNode;
}

const RightImageContentBox = ({
  title = "",
  subtitle = "",
  content = "",
  imgUrl,
  ctaComponent,
  ctaComponent2,
}: RightImageContentBoxProps) => {
  return (
    <div className="container my-3">
      <div className="row align-items-center">
        {/* Image Section */}
        {imgUrl && (
          <div className="col-sm-6 text-center order-1 order-sm-2">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image
                    src={imgUrl}
                    alt={title || "Image"}
                    placeholder="blur"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Text Section */}
        <div
          className={
            imgUrl ? "col-sm-6 order-2 order-sm-1" : "col-12 text-center"
          }
        >
          <div className="outer">
            <div className="middle">
              <div className="inner text-sm-start">
                {title && <h1 className="fw-bold mt-4 mb-3">{title}</h1>}
                {subtitle && <h3 className="mb-3 fst-italic">{subtitle}</h3>}
                {content && <p className="lh-base fs-5">{content}</p>}
                {(ctaComponent || ctaComponent2) && (
                  <div className="d-flex flex-wrap justify-content-sm-start gap-2">
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

export default RightImageContentBox;
