import React, { useState, useEffect } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  const handleResize = () => {
    const mobileView = window.innerWidth < 1000;
    setIsMobile(mobileView);
    setIsSidebarOpen(!mobileView); // Sidebar open by default for desktop, closed for mobile
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger button (only visible on mobile screens) */}
      {isMobile && (
        <div
          className="hamburger-button"
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: "1100", // Ensure the button is always on top
          }}
        >
          <FaBars
            onClick={toggleSidebar}
            style={{ fontSize: "24px", cursor: "pointer" }}
          />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
        style={{
          width: isMobile ? "240px" : "240px",
          height: "100vh",
          position: "fixed", // Keep sidebar fixed
          top: "0",
          left: isSidebarOpen ? "0" : isMobile ? "-240px" : "0",
          zIndex: "1050", // Always above content
          overflowY: "auto",
          transition: "all 0.3s ease-in-out",
          backgroundColor: "#f8f9fa", // Optional for better visibility
          boxShadow: isSidebarOpen ? "2px 0 5px rgba(0, 0, 0, 0.2)" : "none",
          display: "flex", // Use flexbox for layout
          flexDirection: "column", // Stack items vertically
        }}
      >
        {/* Top Section */}
        <div className="sidebar-top" style={{ flexGrow: 1 }}>
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img
              src={"images/summarizer.png"}
              width="80px"
              height="50px"
              alt="Summarizer"
            />
            <strong className="fs-4">Summarizer</strong>
          </a>
          <hr />
          <strong className="fs-5">Library</strong>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis"
                aria-current="page"
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                <MdOutlineLibraryBooks />
                &nbsp; My Library
              </a>
            </li>
          </ul>
          <strong className="fs-5">Account</strong>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis"
                aria-current="page"
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                <IoMdContact />
                <Link to={"/profile"}>&nbsp; My Profile</Link>
                
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom" style={{ paddingBottom: "10px" }}>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <IoMdSettings />
              &nbsp;
              <strong>Settings</strong>
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .sidebar-closed {
            transform: translateX(-100%); /* Slide out effect */
          }

          .sidebar-open {
            transform: translateX(0); /* Slide in effect */
          }

          /* Ensure the sidebar overlays content */
          .sidebar {
            z-index: 1050;
          }

          /* Optional styling for the hamburger button */
          .hamburger-button {
            z-index: 1100;
          }
        `}
      </style>
    </div>
  );
}

export default Sidebar;
