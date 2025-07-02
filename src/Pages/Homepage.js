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

import tcssoftskill from '../Assets/images/Chauhan_Piyush_tcs softskill_page-0001.jpg'
import tatacybersecurity from '../Assets/images/Piyush Chauhan Cybersecurity Analyst Job Simulation_page-0001.jpg'
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
            <div className="col-lg-10">
              <h1 className="text-uppercase display-4 fw-bold" data-aos="fade-up">
                I'm  Rajvirsinh Dabhi, a skilled
                <span className="text-brand"> Mern Stack developer</span>
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
  <a href="rajvirsinhdabhi1@gmail.com" className="custom-link email">
    Email: rajvrisinhdabhi1@gmail.com
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
      <div className="col-md-8" data-aos="fade-up">
        <h1>My Skills</h1>
      </div>
    </div>

    <div className="row gy-4">
      {/* ReactJS */}
      <div className="col-md-3" data-aos="fade-up">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Reactjs} alt="ReactJS" />
          </div>
          <h5 className="mt-3">ReactJS</h5>
        </div>
      </div>

      {/* NodeJS */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Nodejs} alt="NodeJS" />
          </div>
          <h5 className="mt-3">NodeJS</h5>
        </div>
      </div>

      {/* ExpressJS */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={ExpressJS} alt="ExpressJS" />
          </div>
          <h5 className="mt-3">ExpressJS</h5>
        </div>
      </div>

      {/* MongoDB */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Mongodb} alt="MongoDB" />
          </div>
          <h5 className="mt-3">MongoDB</h5>
        </div>
      </div>

      {/* HTML */}
      <div className="col-md-3" data-aos="fade-up">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Html} alt="HTML" />
          </div>
          <h5 className="mt-3">HTML</h5>
        </div>
      </div>

      {/* CSS */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Css} alt="CSS" />
          </div>
          <h5 className="mt-3">CSS</h5>
        </div>
      </div>

      {/* Redux */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Redux} alt="Redux" />
          </div>
          <h5 className="mt-3">Redux</h5>
        </div>
      </div>

      {/* MUI */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
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


      {/* //SERVICES */}

      {/* WORK */}
     {/* WORK */}
{/* WORK */}
<section id="work" className="full-hight px-lg-5">
  <div className="container gy-4">
    <div className="row p-4">
      <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
        <h6>WORK</h6>
        <h1>My Recent Projects</h1>
      </div>
    </div>

    {/* CarVista Project */}
    <div className="row gy-4">
      <div className="col-12 col-md-10 col-lg-8 mx-auto mb-5" data-aos="fade-up">
        <div className="card rounded-4 bg-base shadow-effect">
          <div className="img rounded-4">
            <img src={project1} className="rounded-4 w-100" alt="CarVista Project" />
          </div>
          <div className="card-content p-3">
            <h4>CarVista – Buy & Sell Cars Platform</h4>
            <p className="text-white">
              Developed a full-stack web application inspired by Cars24 using the MERN stack. Features include car listings, real-time price estimation, test drive bookings, inspection scheduling, and a secure admin dashboard for car/user management.
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
        href="https://piyushintro.vercel.app/"
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
</section>


      {/* //WORK */}

      {/* ABOUT */}
    <section id="about" className="full-hight px-lg-5">
  <div className="container gy-4">
    <div className="row p-4">
      <div className="col-md-8" data-aos="fade-up">
        <h6>ABOUT</h6>
        <h1>Education</h1>
      </div>
    </div>

    <div className="row mb-4 gy-4">
      {/* Internship Card */}
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-3">MERN Stack Developer Intern</h5>
            <p><strong>Company:</strong> Brainsquare Technology</p>
            <p><strong>Duration:</strong> 10 months</p>
          </div>
        </div>
      </div>

      {/* College Card */}
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-3">Shree Chimanbhai Patel Institute of Computer Applications</h5>
            <p><strong>Duration:</strong> 2022 – 2025</p>
            <p><strong>Total CGPA:</strong> 7.67</p>
          </div>
        </div>
      </div>

      {/* School Card */}
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-3">Shree Muktajivan School, Ahmedabad</h5>
            <p><strong>X:</strong> 75.16%</p>
            <p><strong>XII:</strong> 81.73%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* //ABOUT */}

{/* CERTIFICATIONS */}
<section id="certifications" className="full-hight px-lg-5">
  <div className="container gy-4">
    <div className="row p-4">
      <div className="col-md-8" data-aos="fade-up">
        <h6>CERTIFICATIONS</h6>
        <h1>My Achievements & Certifications</h1>
      </div>
    </div>

    <div className="row gy-3 h6">
   {/* Certification 2 - Accenture Software Engineering Job Simulation */}
{/* Certification 2 - Accenture Software Engineering Job Simulation */}
{/* Certification 2 - Accenture Software Engineering Job Simulation */}
<div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
  <div className="p-4 shadow-effect bg-base py-4 rounded-4 text-center">
    <div className="mb-3">
      <i className="las la-certificate fs-2"></i>
    </div>
    <img
      src={softwareengsimulationcerti}
      alt="Accenture Software Engineering Job Simulation Certificate"
      className="img-fluid rounded mb-3"
      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    />
    <p>
      Completed the <strong>Software Engineering Job Simulation</strong> by Accenture through Forage.
    </p>
    <div className="person">
      <h3>Issued by: Accenture (Forage)</h3>
      <p>July 2025</p>
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="lab la-linkedin-in"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="lab la-github"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="lab la-instagram"></i></a>
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
