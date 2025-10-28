"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: "/" },
  { name: "About Myself", href: "/about" },
  { name: "My Experience", href: "/experience" },
  { name: "My Projects", href: "/projects" },
  { name: "My Certificates", href: "/certificates" },
  { name: "My Blogs", href: "/blogs" },
  { name: "Contact Me", href: "/contact" },
  { name: "Login", href: "/login" },
];
const MainNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="pc-nav">
        <nav className="navbar navbar-expand-lg text-center">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              Soumwadeep Guha
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {pages.map((page) => (
                  <li className="nav-item" key={page.name}>
                    <Link
                      className={`nav-link ${
                        pathname === page.href ? "active" : ""
                      }`}
                      href={page.href}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Navbar */}
      <div className="mob-nav">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
