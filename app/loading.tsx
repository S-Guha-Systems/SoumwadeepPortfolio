import Image from "next/image";
import logo from "@/img/logo.png";
export default function Loading() {
  return (
    <div className="d-flex align-items-center justify-content-center minheight">
      <Image src={logo} alt="logo" className="loading" priority />
      {/* &nbsp; <span className="fs-3">Loading...</span> */}
    </div>
  );
}
