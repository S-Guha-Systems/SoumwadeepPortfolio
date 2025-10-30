"use client";

import { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150); // show after scrolling 150px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`btn btn-success scroll-top-btn ${
        visible ? "show" : ""
      } rounded-circle shadow`}
      aria-label="Scroll back to top"
    >
      <i className="bi bi-chevron-up fs-4"></i>
    </button>
  );
};

export default ScrollToTop;
