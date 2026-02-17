import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'bootstrap/dist/css/bootstrap.min.css';import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JavaScript bundle
import '../Assets/css/aos.css'; // Re-import AOS CSS for clarity in React context
import '../Assets/css/line-awesome.min.css'; // Import Line Awesome CSS
import '../Assets/css/style.css'; // Import your custom style.css

// Import images
import profilePic from '../Assets/images/Rajvirsinh Dabhi.jpg';
import project1 from '../Assets/images/Carvistahomepage.png';
import PortfolioHomepage from '../Assets/images/PortfolioHomepage.png';
import image from '../Assets/images/image.png';

import Reactjs from '../Assets/images/Reactjs.png'
import Nodejs from '../Assets/images/Nodejs.png'
import ExpressJS from '../Assets/images/Expressjs.png'
import Mongodb from '../Assets/images/Mongodb.png'
import Html from '../Assets/images/Html.png'
import Css from '../Assets/images/Css.png'
import Redux from '../Assets/images/Redux.png'
import Mui from '../Assets/images/Mui.png'
import Rajvirsinh_Dabhi_Resume from '../Assets/pdf/Rajvirsinh Dabhi Resume1.pdf';
import softwareengsimulationcerti from '../Assets/images/Software Engineering Job Simulation Certi_page-0001.jpg'

// NO LONGER NEEDED if using Bootstrap's native ScrollSpy
// import ScrollSpy from 'react-scrollspy';

const Homepage = () => {
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
        target: '.navbar',
        offset: 70
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
      console.warn("Bootstrap JavaScript not fully loaded. ScrollSpy may not function correctly.");
    }
  }, []);

  return (
    <div id="content-wrapper">
      {/* NAV BAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
          {/* FIX: Change href="#" to href="#home" or "/" for proper navigation */}
          <a className="navbar-brand mx-lg-auto mb-lg-4" href="#home">
            <span className="fw-bold h3 d-block d-lg-none">Rajvirsinh Dabhi</span>
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
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">Certifications</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      {/* //NAV BAR */}

      {/* HOME SECTION */}
   <section id="home" className="full-hight px-lg-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto">

        {/* Mobile-only profile picture */}
        <div className="text-center mb-4 d-lg-none">
          <img
            src={profilePic}
            alt="Rajvirsinh Dabhi"
            className="rounded-circle"
            style={{ width: "140px", height: "140px", objectFit: "cover" }}
          />
        </div>

        <h1 className="text-uppercase display-4 fw-bold" data-aos="fade-up">
          I'm <span className="text-brand">Rajvirsinh Dabhi</span>, a skilled Mern Stack Developer
        </h1>
        <p
          className="lead mt-2 mb-3 fs-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I'm delighted to have you here. Explore my work and discover the
          world of innovative solutions I've crafted.
        </p>
        <div data-aos="fade-up" data-aos-delay="600">
          <a href="#work" className="btn btn-brand fw-bold me-4">
            EXPLORE MY WORK
          </a>
          <a href="tel:+919724955379" className="custom-link num me-4">
            Call: +91 9724955379
          </a>
          <a href="mailto:rajvirsinhdabhi1@gmail.com" className="custom-link email">
            Email: rajvirsinhdabhi1@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
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
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Nodejs} alt="NodeJS" />
          </div>
          <h5 className="mt-3">NodeJS</h5>
        </div>
      </div>

      {/* ExpressJS */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={ExpressJS} alt="ExpressJS" />
          </div>
          <h5 className="mt-3">ExpressJS</h5>
        </div>
      </div>

      {/* MongoDB */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
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
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Css} alt="CSS" />
          </div>
          <h5 className="mt-3">CSS</h5>
        </div>
      </div>

      {/* Redux */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Redux} alt="Redux" />
          </div>
          <h5 className="mt-3">Redux</h5>
        </div>
      </div>

      {/* MUI */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
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
{/* ADDITIONAL TECHNOLOGIES – PROFESSIONAL SECTION */}
<section className="w-100 mt-5">
  <div className="row mb-4">
    <div className="col-12 text-center" data-aos="fade-up">
      <h4
        style={{
          color: "var(--color-heading)",
          fontWeight: 700,
          letterSpacing: "0.6px",
        }}
      >
        Additional Technologies & Concepts
      </h4>
      <div
        style={{
          width: "70px",
          height: "3px",
          backgroundColor: "var(--color-brand)",
          margin: "12px auto",
          borderRadius: "10px",
        }}
      />
      <p
        style={{
          color: "var(--color-body)",
          fontSize: "14.5px",
          maxWidth: "520px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Supporting technologies and architectural concepts applied across real-world projects
      </p>
    </div>
  </div>

  <div className="row gy-4">
    {[
      "REST APIs",
      "API Integration",
      "CRUD Operations",
      "Authentication & Authorization",
      "Role-Based Access Control",
      "Prisma ORM",
      "Docker (Basic)",
      "SQL (MySQL)",
      "Performance Optimization",
    ].map((tech, index) => (
      <div
        key={index}
        className="col-6 col-md-4 col-lg-3"
        data-aos="fade-up"
        data-aos-delay={index * 70}
      >
        <div
          style={{
            backgroundColor: "var(--color-base)",
            padding: "18px 16px",
            borderRadius: "12px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.06)",
            transition: "all 0.35s ease",
            height: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.borderColor = "var(--color-brand)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor =
              "rgba(255,255,255,0.06)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-heading)",
              letterSpacing: "0.4px",
              display: "block",
            }}
          >
            {tech}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* //SERVICES */}

      {/* WORK */}
<section id="work" className="full-hight px-lg-5">
  <div className="container gy-4">
    <div className="row p-4">
      <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
        <h6>WORK</h6>
        <h1>My Recent Projects</h1>
      </div>
    </div>

    {/* Monster Gym Project */}
    <div className="row gy-4">
     
      {/* CarVista Project */}
      <div className="col-12 col-md-10 col-lg-8 mx-auto mb-5" data-aos="fade-up">
        <div className="card rounded-4 bg-base shadow-effect">
          <div className="img rounded-4">
            <img src={project1} className="rounded-4 w-100" alt="CarVista Project" />
          </div>
          <div className="card-content p-3">
            <h4>CarVista – Buy & Sell Cars Platform</h4>
           <p className="text-white">
  Developed a full-stack web application inspired by Cars24 using the 
  <strong> MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>. 
  Implemented <strong>REST APIs</strong> for car listings, test drive bookings,
  inspections, and admin operations. Worked on 
  <strong>frontend development using React.js</strong> with seamless 
  <strong>API integration</strong>, authentication, and role-based access control.
</p>

            <a
              href="https://carvistafront-iwxb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link btn btn-brand mt-2"
            >
              View Live
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio Intro Project */}
      <div className="col-12 col-md-10 col-lg-8 mx-auto mb-5" data-aos="fade-up" data-aos-delay="300">
        <div className="card rounded-4 bg-base shadow-effect">
          <div className="img rounded-4">
            <img src={PortfolioHomepage} className="rounded-4 w-100" alt="Portfolio Intro Project" />
          </div>
          <div className="card-content p-3">
            <h4>Portfolio Intro – Developer Profile Website</h4>
            <p className="text-white">
              Designed and deployed a professional developer introduction website with a sleek UI, responsive design, and dark theme. Showcases key skills, contact info, and resume with animated transitions. Built using React and styled with modern CSS.
            </p>
            <a
              href="https://rajvirintro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link btn btn-brand mt-2"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
       <div className="col-12 col-md-10 col-lg-8 mx-auto mb-5" data-aos="fade-up">
        <div className="card rounded-4 bg-base shadow-effect">
          <div className="img rounded-4">
            <img src={image} className="rounded-4 w-100" alt="Monster Gym Project" />
          </div>
          <div className="card-content p-3">
            <h4>Monster Gym – Workout Plans UI</h4>
            <p className="text-white">
              Built an engaging front-end UI for a Gym and its workout plans using HTML, CSS, and Bootstrap.
              Includes interactive carousel, plan cards (abs, legs, chest, arms), and responsive pricing section.
              Designed during the early phase of my web development journey to learn core UI/UX principles.
            </p>
            <a
              href="https://monster-gym-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link btn btn-brand mt-2"
            >
              View Live
            </a>
          </div>
        </div>
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
          <h5>Web Development Intern <span className="text-brand">(Current)</span></h5>
          <p className="mb-1"><strong>Company:</strong> Devam Technologies</p>
          <p className="mb-1"><strong>Tech Stack:</strong> MERN, Next.js, Prisma, Docker</p>
          <p className="mb-0"><strong>Duration:</strong> Sep 2025 – Present</p>
        </div>

        {/* Past Internship */}
        <div className="bg-base p-4 rounded-4 shadow-effect">
          <h5>MERN Stack Developer Intern</h5>
          <p className="mb-1"><strong>Company:</strong> BrainSquare Technologies</p>
          <p className="mb-1"><strong>Tech Stack:</strong> MongoDB, Express, React, Node.js</p>
          <p className="mb-0"><strong>Duration:</strong> Nov 2024 – Apr 2025</p>
        </div>
      </div>

      {/* EDUCATION COLUMN */}
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h4 className="mb-4 text-brand">Education</h4>

        {/* MCA */}
        <div className="bg-base p-4 rounded-4 shadow-effect mb-4">
          <h5>Master of Computer Applications (MCA)</h5>
          <p className="mb-1"><strong>Status:</strong> Ongoing</p>
          <p className="mb-1"><strong>SGPA:</strong> 8.58</p>
          <p className="mb-0"><strong>CGPA:</strong> 8.58</p>
        </div>

        {/* BCA */}
        <div className="bg-base p-4 rounded-4 shadow-effect">
          <h5>Bachelor of Computer Applications (BCA)</h5>
          <p className="mb-1"><strong>Status:</strong> Completed</p>
          <p className="mb-1"><strong>CGPA:</strong> 7.67</p>
          <p className="mb-0"><strong>Duration:</strong> 2022 – 2025</p>
        </div>
      </div>

    </div>

    {/* PROFESSIONAL SUMMARY */}
    <div className="row mt-5">
      <div className="col-md-10 mx-auto text-center" data-aos="fade-up">
        <p className="lead text-white" style={{ lineHeight: "1.7" }}>
          I am a <strong>MERN Stack Developer</strong> with hands-on experience in
          building scalable, production-ready web applications using
          <strong> React.js, Next.js, Node.js, Express.js, and MongoDB</strong>.
          I specialize in <strong>REST API development</strong>, seamless
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

          <img
            src={softwareengsimulationcerti}
            alt="Accenture Software Engineering Job Simulation Certificate"
            className="img-fluid rounded mb-3"
            style={{ objectFit: "contain" }}
          />

          <h5 className="mb-2">
            Software Engineering Job Simulation
          </h5>

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
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 text-center">
          <i className="las la-certificate fs-2 mb-3 text-brand"></i>

          <h5 className="mb-2">
            Introduction to Retrieval Augmented Generation (RAG)
          </h5>

          <p className="small mb-2">
            Learned RAG fundamentals including retrieval mechanisms,
            embeddings, vector search, and AI workflow integration.
          </p>

          <p className="mb-0">
            <strong>Issued by:</strong> IBM SkillsBuild
          </p>
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
              <a href="https://www.linkedin.com/in/rajvirsinh-dabhi-0b9320253/" target="_blank" rel="noopener noreferrer"><i className="lab la-linkedin-in"></i></a>
              <a href="https://github.com/rajvirsinh08" target="_blank" rel="noopener noreferrer"><i className="lab la-github"></i></a>
              <a href="https://www.instagram.com/rajvirsinh__08?igsh=MTVpa3k5dGR0anMxNg==" target="_blank" rel="noopener noreferrer"><i className="lab la-instagram"></i></a>
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



    </div>
  );
};

export default Homepage;
