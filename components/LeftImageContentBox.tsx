import Image, { StaticImageData } from "next/image";

interface LeftImageContentBoxProps {
  title: string;
  content: string;
  imgUrl: StaticImageData | string;
}

const LeftImageContentBox = ({
  title,
  content,
  imgUrl,
}: LeftImageContentBoxProps) => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-sm-5 text-center">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <Image
                  src={imgUrl}
                  alt={title}
                  placeholder="blur"
                  id="animateimg2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="col-sm-7">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1 className="fw-bold mb-3">{title}</h1>
                <p className="lh-lg">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageContentBox;
