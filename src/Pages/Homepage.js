import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap's JavaScript bundle
import "../Assets/css/aos.css"; // Re-import AOS CSS for clarity in React context
import "../Assets/css/line-awesome.min.css"; // Import Line Awesome CSS
import "../Assets/css/style.css"; // Import your custom style.css
import { useState } from "react";
// Import images
import profilePic from "../Assets/images/Rajvirsinh Dabhi.jpg";
import project1 from "../Assets/images/Carvistahomepage.png";
import PortfolioHomepage from "../Assets/images/PortfolioHomepage.png";
import image from "../Assets/images/image.png";

import Reactjs from "../Assets/images/Reactjs.png";
import Nodejs from "../Assets/images/Nodejs.png";
import ExpressJS from "../Assets/images/Expressjs.png";
import Mongodb from "../Assets/images/Mongodb.png";
import Html from "../Assets/images/Html.png";
import Css from "../Assets/images/Css.png";
import Redux from "../Assets/images/Redux.png";
import Mui from "../Assets/images/Mui.png";
import Rajvirsinh_Dabhi_Resume from "../Assets/pdf/Rajvirsinh Dabhi Resume1.pdf";
import softwareengsimulationcerti from "../Assets/images/Software Engineering Job Simulation Certi_page-0001.jpg";

// NO LONGER NEEDED if using Bootstrap's native ScrollSpy
// import ScrollSpy from 'react-scrollspy';

const Homepage = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // Initialize Bootstrap's scrollspy.
    // Ensure window.bootstrap is available before attempting to use it.
    if (window.bootstrap) {
      // Remove the 'const scrollSpy =' part
      new window.bootstrap.ScrollSpy(document.body, {
        target: ".navbar",
        offset: 70,
      });

      // Clean up function if component unmounts (Bootstrap 5's ScrollSpy doesn't
      // have an explicit 'dispose' method often used for simple unmounts)
      // If you notice issues with ScrollSpy on re-renders/unmounts,
      // consider a more complex cleanup or using a React-specific scrollspy library.
      return () => {
        // You generally don't need to explicitly dispose Bootstrap 5's ScrollSpy
        // unless you're dynamically adding/removing elements.
      };
    } else {
      console.warn(
        "Bootstrap JavaScript not fully loaded. ScrollSpy may not function correctly.",
      );
    }
  }, []);
  const ProjectCard = ({ image, title, description, link }) => {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-12px)";
          e.currentTarget.style.boxShadow = "0 25px 50px rgba(89,133,101,0.25)";
          e.currentTarget.style.borderColor = "#598565";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        }}
      >
        {/* Image */}
        <div style={{ overflow: "hidden" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              transition: "transform 0.6s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "30px" }}>
          <h4 style={{ color: "#fff", fontWeight: 700 }}>{title}</h4>

          <p style={{ color: "#A6B0A8", lineHeight: "1.7" }}>{description}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 34px",
              borderRadius: "40px",
              background: "linear-gradient(90deg, #598565, #8FBF9F)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "0.5px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "15px",
              lineHeight: "1",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(89,133,101,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(89,133,101,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 15px rgba(89,133,101,0.25)";
            }}
          >
            View Live
            <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>
      </div>
    );
  };
  return (
    <div
      id="content-wrapper"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0d1117",
        overflow: "hidden",
      }}
    >
      {/* GLOBAL BACKGROUND DESIGN */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "60%",
          height: "100vh",
          background: "linear-gradient(135deg, #598565, #3D6B49)",
          clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* NAV BAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
          {/* FIX: Change href="#" to href="#home" or "/" for proper navigation */}
          <a className="navbar-brand mx-lg-auto mb-lg-4" href="#home">
            <span className="fw-bold h3 d-block d-lg-none">
              Rajvirsinh Dabhi
            </span>
            <img
              src={profilePic}
              className="d-none d-lg-block rounded-circle profilepic"
              alt="Rajvirsinh Dabhi"
            />
          </a>
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
            <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* //NAV BAR */}

      {/* HOME SECTION */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        {/* Diagonal Background (Desktop Only Visual Enhancement) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            background: "linear-gradient(135deg, #598565, #3D6B49)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 0.1,
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="col-lg-7 text-center text-lg-start py-5">
              {/* Mobile Profile Only */}
              <div
                className="d-block d-lg-none mb-4"
                style={{
                  marginTop: "35px", // 👈 Adjust this value (60–90px if needed)
                  marginBottom: "25px",
                }}
              >
                <img
                  src={profilePic}
                  alt="Rajvirsinh Dabhi"
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #598565",
                    animation: "fadeIn 1s ease",
                  }}
                />
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 8vw, 4rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: "1.1",
                  animation: "slideUp 1s ease",
                }}
              >
                Turning Ideas Into
                <span
                  style={{
                    display: "block",
                    background: "linear-gradient(90deg, #598565, #8FBF9F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Scalable Digital Products
                </span>
              </h1>

              <p
                style={{
                  marginTop: "25px",
                  color: "#A6B0A8",
                  fontSize: "1.05rem",
                  maxWidth: "600px",
                  animation: "slideUp 1.2s ease",
                }}
              >
                I'm Rajvirsinh Dabhi, a MERN stack developer building secure,
                high-performance web applications with modern user interfaces.
              </p>

              {/* Skill Tags */}
              <div
                className="mt-4 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start"
                style={{ animation: "slideUp 1.4s ease" }}
              >
                {["React", "Node.js", "MongoDB", "Express"].map((item, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      background: "rgba(89,133,101,0.1)",
                      border: "1px solid rgba(89,133,101,0.4)",
                      color: "#598565",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
                style={{ animation: "slideUp 1.6s ease" }}
              >
                <a
                  href="#work"
                  style={{
                    padding: "14px 36px",
                    borderRadius: "40px",
                    background: "linear-gradient(90deg, #598565, #8FBF9F)",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 18px rgba(89,133,101,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px rgba(89,133,101,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(89,133,101,0.25)";
                  }}
                >
                  View Work
                  <span style={{ fontSize: "16px" }}>↓</span>
                </a>

                <a
                  href={Rajvirsinh_Dabhi_Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "14px 36px",
                    borderRadius: "40px",
                    border: "2px solid #598565",
                    color: "#598565",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* ================= RIGHT SIDE RING (Desktop Only) ================= */}
            <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
              <div
                style={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  border: "3px dashed #598565",
                  animation: "rotateRing 15s linear infinite",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/heroimg.png"
                  alt="Hero Visual"
                  style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "contain",
                    animation: "counterRotate 15s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeIn {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }

      @keyframes rotateRing {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes counterRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
    `}
        </style>
      </section>

      {/* //HOME SECTION */}

      {/* SERVICES */}
      <section id="services" className="full-hight px-lg-5">
        <div className="container">
          <div className="row p-4">
            <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
              <h1>My Skills</h1>
            </div>
          </div>

          <div className="row gy-4">
            {/* ReactJS */}
            <div className="col-6 col-md-3" data-aos="fade-up">
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Reactjs} alt="ReactJS" />
                </div>
                <h5 className="mt-3">ReactJS</h5>
              </div>
            </div>

            {/* NodeJS */}
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Nodejs} alt="NodeJS" />
                </div>
                <h5 className="mt-3">NodeJS</h5>
              </div>
            </div>

            {/* ExpressJS */}
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={ExpressJS} alt="ExpressJS" />
                </div>
                <h5 className="mt-3">ExpressJS</h5>
              </div>
            </div>

            {/* MongoDB */}
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Mongodb} alt="MongoDB" />
                </div>
                <h5 className="mt-3">MongoDB</h5>
              </div>
            </div>

            {/* HTML */}
            <div className="col-6 col-md-3" data-aos="fade-up">
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Html} alt="HTML" />
                </div>
                <h5 className="mt-3">HTML</h5>
              </div>
            </div>

            {/* CSS */}
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Css} alt="CSS" />
                </div>
                <h5 className="mt-3">CSS</h5>
              </div>
            </div>

            {/* Redux */}
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Redux} alt="Redux" />
                </div>
                <h5 className="mt-3">Redux</h5>
              </div>
            </div>

            {/* MUI */}
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
                <div className="centered-img-container">
                  <img src={Mui} alt="MUI" />
                </div>
                <h5 className="mt-3">MUI</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ADDITIONAL TECHNOLOGIES SECTION */}
      {/* ADDITIONAL TECHNOLOGIES – PREMIUM SECTION */}
      <section
        className="w-100 mt-5 py-5"
        style={{
          position: "relative",
        }}
      >
        <div className="container">
          {/* HEADER */}
          <div className="row mb-5">
            <div className="col-12 text-center" data-aos="fade-up">
              <h3
                style={{
                  color: "var(--color-heading)",
                  fontWeight: 800,
                  letterSpacing: "0.8px",
                }}
              >
                Additional Technologies & Concepts
              </h3>

              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #598565, #8FBF9F)",
                  margin: "14px auto",
                  borderRadius: "20px",
                }}
              />

              <p
                style={{
                  color: "var(--color-body)",
                  fontSize: "15px",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: "1.7",
                }}
              >
                Supporting technologies and architectural principles applied
                across scalable real-world applications.
              </p>
            </div>
          </div>

          {/* TECH GRID */}
          <div className="row g-4">
            {[
              "REST APIs",
              "API Integration",
              "CRUD Operations",
              "Authentication & Authorization",
              "Role-Based Access Control",
              "Prisma ORM",
              "Docker (Basic)",
              "SQL (MySQL)",
            ].map((tech, index) => (
              <div
                key={index}
                className="col-6 col-md-4 col-lg-3"
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "22px 18px",
                    borderRadius: "16px",
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    cursor: "default",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#598565";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(89,133,101,0.25)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(89,133,101,0.08), rgba(89,133,101,0.02))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--color-heading)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //SERVICES */}

      {/* WORK */}
      {/* WORK */}
      <section id="work" className="full-hight px-lg-5">
        <div className="container gy-4">
          {/* Section Header */}
          <div className="row p-4">
            <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
              <h6 style={{ color: "#598565", letterSpacing: "2px" }}>WORK</h6>
              <h1 style={{ color: "#fff", fontWeight: 800 }}>
                My Recent Projects
              </h1>
            </div>
          </div>

          <div className="row gy-5">
            {/* ================== PROJECT 1 ================== */}
            <div
              className="col-12 col-md-10 col-lg-8 mx-auto"
              data-aos="fade-up"
            >
              <ProjectCard
                image={project1}
                title="CarVista – Buy & Sell Cars Platform"
                description={`Developed a full-stack web application inspired by Cars24 using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented REST APIs for car listings, test drive bookings, inspections, and admin operations. Worked on frontend development using React.js with seamless API integration, authentication, and role-based access control.`}
                link="https://carvistafront-iwxb.vercel.app/"
              />
            </div>

            {/* ================== PROJECT 2 ================== */}
            <div
              className="col-12 col-md-10 col-lg-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ProjectCard
                image={PortfolioHomepage}
                title="Portfolio Intro – Developer Profile Website"
                description={`Designed and deployed a professional developer introduction website with a sleek UI, responsive design, and dark theme. Showcases key skills, contact info, and resume with animated transitions. Built using React and styled with modern CSS.`}
                link="https://rajvirintro.vercel.app/"
              />
            </div>

            {/* ================== PROJECT 3 ================== */}
            <div
              className="col-12 col-md-10 col-lg-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <ProjectCard
                image={image}
                title="Monster Gym – Workout Plans UI"
                description={`Built an engaging front-end UI for a Gym and its workout plans using HTML, CSS, and Bootstrap. Includes interactive carousel, plan cards (abs, legs, chest, arms), and responsive pricing section. Designed during the early phase of my web development journey to learn core UI/UX principles.`}
                link="https://monster-gym-frontend.vercel.app/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* //WORK */}

      {/* ABOUT */}
      <section id="about" className="full-hight px-lg-5">
        <div className="container gy-4">
          {/* SECTION HEADER */}
          <div className="row p-4">
            <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
              <h6>ABOUT</h6>
              <h1>Education & Experience</h1>
            </div>
          </div>

          {/* EXPERIENCE + EDUCATION GRID */}
          <div className="row gy-5">
            {/* EXPERIENCE COLUMN */}
            <div className="col-lg-6" data-aos="fade-up">
              <h4 className="mb-4 text-brand">Professional Experience</h4>

              {/* Current Internship */}
              <div className="bg-base p-4 rounded-4 shadow-effect mb-4">
                <h5>
                  Web Development Intern{" "}
                  <span className="text-brand">(Current)</span>
                </h5>
                <p className="mb-1">
                  <strong>Company:</strong> Devam Technologies
                </p>
                <p className="mb-1">
                  <strong>Tech Stack:</strong> MERN, Next.js, Prisma, Docker
                </p>
                <p className="mb-0">
                  <strong>Duration:</strong> Sep 2025 – Present
                </p>
              </div>

              {/* Past Internship */}
              <div className="bg-base p-4 rounded-4 shadow-effect">
                <h5>MERN Stack Developer Intern</h5>
                <p className="mb-1">
                  <strong>Company:</strong> BrainSquare Technologies
                </p>
                <p className="mb-1">
                  <strong>Tech Stack:</strong> MongoDB, Express, React, Node.js
                </p>
                <p className="mb-0">
                  <strong>Duration:</strong> Nov 2024 – Apr 2025
                </p>
              </div>
            </div>

            {/* EDUCATION COLUMN */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="mb-4 text-brand">Education</h4>

              {/* MCA */}
              <div className="bg-base p-4 rounded-4 shadow-effect mb-4">
                <h5>Master of Computer Applications (MCA)</h5>
                <p className="mb-1">
                  <strong>Status:</strong> Ongoing
                </p>
                <p className="mb-1">
                  <strong>SGPA:</strong> 8.58
                </p>
                <p className="mb-0">
                  <strong>CGPA:</strong> 8.58
                </p>
              </div>

              {/* BCA */}
              <div className="bg-base p-4 rounded-4 shadow-effect">
                <h5>Bachelor of Computer Applications (BCA)</h5>
                <p className="mb-1">
                  <strong>Status:</strong> Completed
                </p>
                <p className="mb-1">
                  <strong>CGPA:</strong> 7.67
                </p>
                <p className="mb-0">
                  <strong>Duration:</strong> 2022 – 2025
                </p>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div className="row mt-5">
            <div className="col-md-10 mx-auto text-center" data-aos="fade-up">
              <p className="lead text-white" style={{ lineHeight: "1.7" }}>
                I am a <strong>MERN Stack Developer</strong> with hands-on
                experience in building scalable, production-ready web
                applications using
                <strong>
                  {" "}
                  React.js, Next.js, Node.js, Express.js, and MongoDB
                </strong>
                . I specialize in <strong>REST API development</strong>,
                seamless
                <strong> frontend-backend integration</strong>, authentication,
                CRUD operations, and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* //ABOUT */}

      {/* //ABOUT */}

      {/* CERTIFICATIONS */}
      <section id="certifications" className="full-hight px-lg-5">
        <div className="container gy-4">
          {/* SECTION HEADER */}
          <div className="row p-4">
            <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
              <h6>CERTIFICATIONS</h6>
              <h1>Achievements & Certifications</h1>
            </div>
          </div>

          {/* CERTIFICATIONS GRID */}
          <div className="row gy-4 justify-content-center">
            {/* Accenture Certification */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="bg-base p-4 rounded-4 shadow-effect h-100 text-center">
                <i className="las la-certificate fs-2 mb-3 text-brand"></i>

                <div
                  style={{
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedCert(softwareengsimulationcerti)}
                >
                  <img
                    src={softwareengsimulationcerti}
                    alt="Accenture Certificate"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h5 className="mb-2">Software Engineering Job Simulation</h5>

                <p className="small mb-2">
                  Completed a hands-on job simulation covering real-world
                  software engineering tasks and problem-solving workflows.
                </p>

                <p className="mb-0">
                  <strong>Issued by:</strong> Accenture (Forage) <br />
                  <strong>Date:</strong> July 2025
                </p>
              </div>
            </div>

            {/* IBM RAG Certification */}
            {/* IBM RAG Certification */}
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-base p-4 rounded-4 shadow-effect h-100 text-center d-flex flex-column">
                <i className="las la-certificate fs-2 mb-3 text-brand"></i>

                <div
                  style={{
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedCert("/ibmcerti.png")}
                >
                  <img
                    src="/ibmcerti.png"
                    alt="IBM RAG Certification"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="mt-3 flex-grow-1">
                  <h5 className="mb-2">
                    Introduction to Retrieval Augmented Generation (RAG)
                  </h5>

                  <p className="small mb-2">
                    Learned RAG fundamentals including retrieval mechanisms,
                    embeddings, vector search, and AI workflow integration.
                  </p>

                  <p className="mb-0">
                    <strong>Issued by:</strong> IBM SkillsBuild <br />
                    <strong>Date:</strong> Sep 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //CERTIFICATIONS */}

      {/* FOOTER */}
      <footer className="px-lg-5 py-4">
        <div className="container m-4">
          <div className="row justify-content-between gy-4">
            <div className="col-auto mb-0">
              <p>Designed By Rajvirsinh Dabhi</p>
            </div>
            <div className="social-icons col-auto">
              <a
                href="https://www.linkedin.com/in/rajvirsinh-dabhi-0b9320253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="lab la-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/rajvirsinh08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="lab la-github"></i>
              </a>
              <a
                href="https://www.instagram.com/rajvirsinh__08?igsh=MTVpa3k5dGR0anMxNg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="lab la-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* //FOOTER */}
      <a
        href={Rajvirsinh_Dabhi_Resume}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-resume-btn"
        title="Check Resume"
      >
        <i className="las la-file-alt me-2"></i> Check Resume
      </a>

      {/* CERTIFICATE MODAL */}
      {selectedCert && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark border-0 rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title text-white">Certificate Preview</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedCert(null)}
                />
              </div>

              <div className="modal-body text-center">
                <img
                  src={selectedCert}
                  alt="Certificate Preview"
                  style={{
                    width: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
