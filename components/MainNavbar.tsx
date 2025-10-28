"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: "/", icon: "bi-house" },
  { name: "About Myself", href: "/about", icon: "bi-person" },
  { name: "My Experience", href: "/experience", icon: "bi-briefcase" },
  { name: "My Projects", href: "/projects", icon: "bi-kanban" },
  { name: "My Certificates", href: "/certificates", icon: "bi-patch-check" },
  { name: "My Blogs", href: "/blogs", icon: "bi-journal-text" },
  { name: "Contact Me", href: "/contact", icon: "bi-envelope" },
  { name: "Login", href: "/login", icon: "bi-box-arrow-in-right" },
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
      <nav className="mob-nav">
        <div className="scroll-row">
          <ul className="nav flex-nowrap">
            {pages.map((p) => {
              const active = pathname === p.href;
              return (
                <li className="nav-item me-1" key={p.name}>
                  <Link
                    href={p.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    aria-label={p.name}
                  >
                    <i className={`bi ${p.icon}`} />
                    <span style={{ fontSize: ".8rem" }}>{p.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
