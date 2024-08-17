import React from 'react';
import { Link } from "react-router-dom";
import maplogo from '../assets/image-video/map-marker-4-svgrepo-com.svg';
import calllogo from '../assets/image-video/call-192-svgrepo-com.svg';
import maillogo from '../assets/image-video/mail-svgrepo-com.svg';

export default function Footer() {
  return (
    <>
      <footer
        style={{ backgroundColor: "#000", padding: "2rem 0" }}
        className="page12"
      >
        <div
          className="Page12links&contact"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "2rem",
            gap: "4rem",
          }}
        >
          <div className="page12sections">
            <span>
              <p>
                <Link alt="" to="/">Home</Link>
              </p>
              <hr />
              <p>
              <Link alt="" to="/facilites">Facilites</Link>
              </p>
              <hr />
              <p>
              <Link alt="" to="/gallery">Gallery</Link>
              </p>
              <hr />
              <p>
              <Link alt="" to="/blog">Blog</Link>
              </p>
              <hr />
              <p>
              <Link alt="" to="/contactus">Get In touch</Link>
              </p>
              <hr />
              <p>
              <Link alt="" to="/downloadapp">Download App</Link>
              </p>
              <hr />
            </span>
          </div>

          <div className="page12contactus">
            <h6
              style={{
                fontSize: "24px",
                color: "white",
                margin: " 0 0 1rem 0",
              }}
            >
              Contact Us
            </h6>
            <span>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <img
                    src={maplogo}
                    style={{ height: "1rem", margin: "0.6rem" }}
                  />
                </span>
                <a  style={{ fontSize: "13px" }}>
                  <span style={{fontWeight: "bold"}}>Address:</span>
                  <br />
                  Puruna Hatasahi, behind SBI bank Main branch, Baripada, Odisha
                  757001
                </a>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <img
                    src={calllogo}
                    style={{ height: "1rem", margin: "0.6rem" }}
                  />
                </span>
                <a  style={{ fontSize: "13px" }}>
                <span style={{fontWeight: "bold"}}>Phone:</span>
                  <br />
                  +91 7008976481 | +91 9556966060
                </a>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <img
                    src={maillogo}
                    style={{ height: "1rem", margin: "0.6rem" }}
                  />
                </span>
                <a style={{ fontSize: "13px" }}>
                <span style={{fontWeight: "bold"}}>Email:</span>
                  <br />
                  revolutionmultigym@gmail.com
                </a>
              </p>
            </span>
          </div>
        </div>
      </footer>
      <div
        className="attribution"
        style={{
          backgroundColor: "#2a242e",
          textAlign: "center",
          color: "#fff",
          padding: "1.5rem 0",
        }}
      >
        © 2024 Copyright: Revolution Multi Gym |
        <a href="#" style={{ padding: "0 0.5rem" }}>
          | Made by SHUB
        </a>
      </div>
    </>
  );
}
