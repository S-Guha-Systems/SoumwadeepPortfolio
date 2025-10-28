import Image, { StaticImageData } from "next/image";

interface RightImageContentBoxProps {
  title: string;
  content: string;
  imgUrl: StaticImageData | string;
}

const RightImageContentBox = ({
  title,
  content,
  imgUrl,
}: RightImageContentBoxProps) => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Right Image Section */}
        <div className="col-sm-6">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1 className="fw-bold mb-3">{title}</h1>
                <p className="lh-lg">{content}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-center">
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
