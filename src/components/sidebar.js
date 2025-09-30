"use client";
import React from "react";
import { STATIC_DATA } from "@/helper/static";

export default function Sidebar() {
  function handleRefresh(path) {
    window.location.href = path;
  }

  return (
      <aside id="bauen-aside">
        <div className="bauen-logo" onClick={() => handleRefresh("/")}>
          <img src={"/img/logo.png"} className="logo-img rounded-3" alt="" />
          <h2>
            MEDI<span>ARCHITECT</span>
          </h2>
        </div>

        <nav className="bauen-main-menu">
          <ul>
            <li className="active">
              <a onClick={() => handleRefresh("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleRefresh("/about")}>About</a>
            </li>
            <li className="bauen-sub">
              <a onClick={() => handleRefresh("/service")}>Services</a>
            </li>
            <li>
              <a onClick={() => handleRefresh("/project")}>Projects</a>
            </li>
            <li>
              <a onClick={() => handleRefresh("/contact")}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="bauen-footer">
          <ul>
            <li>
              <a
                  href={STATIC_DATA.PHONE_REDIRECTION}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <i className="ti-mobile" />
              </a>
            </li>
            <li>
              <a
                  href={STATIC_DATA.EMAIL_REDIRECTION}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <i className="ti-email" />
              </a>
            </li>
            <li>
              <a
                  href="https://www.instagram.com/medi_architects_"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <i className="ti-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
  );
}
