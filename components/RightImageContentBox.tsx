import Image, { StaticImageData } from "next/image";

const LeftImageContentBox = (
  title: string,
  content: string,
  imgUrl: string | StaticImageData
) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>{title}</h1>
                <p className="lh-lg">{content}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
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

export default LeftImageContentBox;
