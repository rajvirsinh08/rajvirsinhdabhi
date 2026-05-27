import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap's JavaScript bundle
import "../Assets/css/aos.css"; // Re-import AOS CSS for clarity in React context
import "../Assets/css/line-awesome.min.css"; // Import Line Awesome CSS
import "../Assets/css/style.css"; // Import your custom style.css
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
// Import images
import profilePic from "../Assets/images/Rajvir.jpg";
import project1 from "../Assets/images/Carvistahomepage.png";
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
import Typescript from "../Assets/images/typescript.png";
import Nextjs from "../Assets/images/next.png";
import Github from "../Assets/images/github.png";
import jwttoken from "../Assets/images/jwttoken.png";

// NO LONGER NEEDED if using Bootstrap's native ScrollSpy
// import ScrollSpy from 'react-scrollspy';

const Homepage = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);
const [selectedProject, setSelectedProject] = useState("");
const [selectedBlog, setSelectedBlog] = useState(null);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const [popup, setPopup] = useState({
  show: false,
  type: "", // "success" | "error" | "warning"
  message: "",
});
const [loading, setLoading] = useState(false);
const blogs = [
  {
    id: 1,
    title: "React vs Next.js – Which One Should You Learn in 2026?",
    slug: "react-vs-nextjs-which-one-should-you-learn-2026",
    category: "React",
    readTime: "8 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",

    description:
      "Compare React.js and Next.js, their features, performance, SEO capabilities, and which one is better for modern web development.",

    content: `
React.js and Next.js are two of the most popular technologies used for modern frontend development.

React.js is a JavaScript library used for building dynamic user interfaces using reusable components.

Next.js is a React framework that adds powerful features like:
• Server-side rendering
• SEO optimization
• File-based routing
• API routes
• Performance optimization

Benefits of React.js:
• Flexible architecture
• Large ecosystem
• Huge community support
• Reusable components

Benefits of Next.js:
• Better SEO
• Faster page loading
• Built-in routing
• Optimized production performance

If you want flexibility and SPA applications, React.js is excellent.

If you want production-ready SEO optimized applications, Next.js is the better choice.
`,
  },

  {
    id: 2,
    title: "Complete MERN Stack Authentication Guide Using JWT",
    slug: "complete-mern-stack-authentication-guide-jwt",
    category: "MERN",
    readTime: "10 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

    description:
      "Learn how to implement secure JWT authentication in MERN Stack applications with access tokens and protected routes.",

    content: `
JWT Authentication is one of the most secure authentication systems used in MERN Stack applications.

A complete authentication flow includes:
• User registration
• Login system
• Password hashing
• JWT token generation
• Protected routes
• Role-based authorization

Technologies Used:
• React.js
• Node.js
• Express.js
• MongoDB
• JWT
• bcrypt.js

Authentication Process:
1. User logs in
2. Backend validates credentials
3. JWT token is generated
4. Token stored securely
5. Protected APIs verify token

Best Practices:
• Use bcrypt for hashing
• Store tokens securely
• Use middleware protection
• Implement token expiration
• Validate user roles
`,
  },

  {
    id: 3,
    title: "How to Build REST APIs in Node.js and Express.js",
    slug: "build-rest-apis-nodejs-expressjs",
    category: "Node.js",
    readTime: "7 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

    description:
      "Step-by-step guide to building scalable REST APIs using Node.js, Express.js, middleware, and MongoDB.",

    content: `
REST APIs are the backbone of modern web applications.

Using Node.js and Express.js you can build scalable backend systems for:
• Web applications
• Mobile apps
• Dashboards
• Ecommerce platforms

Core API Components:
• Routes
• Controllers
• Middleware
• Database Models
• Authentication

Steps to Build APIs:
1. Setup Express server
2. Connect MongoDB
3. Create routes
4. Build controllers
5. Add middleware
6. Implement authentication
7. Test APIs

Best Practices:
• Use MVC architecture
• Validate requests
• Handle errors properly
• Secure endpoints
• Use async/await
`,
  },

  {
    id: 4,
    title: "MongoDB vs MySQL for MERN Applications",
    slug: "mongodb-vs-mysql-for-mern-applications",
    category: "Database",
    readTime: "6 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",

    description:
      "Understand the differences between MongoDB and MySQL and choose the best database for your web applications.",

    content: `
MongoDB and MySQL are both powerful databases but used for different requirements.

MongoDB:
• NoSQL database
• Flexible schema
• JSON-based documents
• Ideal for MERN Stack

MySQL:
• Relational database
• Structured tables
• SQL queries
• Strong relationships

MongoDB Advantages:
• Faster development
• Flexible structure
• Better scalability
• Great for dynamic applications

MySQL Advantages:
• Strong consistency
• Relational data handling
• Mature ecosystem

For MERN Stack applications, MongoDB is generally preferred because of its JSON document structure.
`,
  },

  {
    id: 5,
    title: "How to Deploy a MERN Stack App on Vercel",
    slug: "deploy-mern-stack-app-on-vercel",
    category: "Deployment",
    readTime: "5 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

    description:
      "Learn how to deploy frontend and backend MERN applications on Vercel with environment variables and production setup.",

    content: `
Deployment is an important part of production-ready applications.

Vercel provides fast and scalable hosting for frontend applications.

Deployment Steps:
1. Push project to GitHub
2. Connect GitHub with Vercel
3. Configure environment variables
4. Deploy frontend
5. Deploy backend APIs

Benefits of Vercel:
• Fast deployment
• Global CDN
• Free SSL
• Automatic builds
• Git integration

Best Practices:
• Use environment variables
• Optimize images
• Enable SEO
• Use production APIs
• Monitor deployments
`,
  },

  {
    id: 6,
    title: "Building a Full Stack Admin Dashboard Using React and Node.js",
    slug: "full-stack-admin-dashboard-react-nodejs",
    category: "Full Stack",
    readTime: "9 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

    description:
      "Build a professional admin dashboard using React.js, Node.js, charts, authentication, and CRUD operations.",

    content: `
Admin dashboards are essential for managing applications and business systems.

A professional dashboard should include:
• Authentication
• Analytics
• Charts
• CRUD operations
• Filters
• Responsive UI

Frontend Technologies:
• React.js
• Material UI
• Charts
• Redux

Backend Technologies:
• Node.js
• Express.js
• MongoDB

Dashboard Features:
• User management
• Data visualization
• Role-based access
• Reports
• API integrations
`,
  },

  {
    id: 7,
    title: "React Native vs Flutter – Which is Better?",
    slug: "react-native-vs-flutter",
    category: "Mobile Development",
    readTime: "8 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",

    description:
      "Compare React Native and Flutter for cross-platform mobile app development and performance.",

    content: `
React Native and Flutter are popular frameworks for cross-platform mobile apps.

React Native:
• Uses JavaScript
• Built by Meta
• Reusable React skills
• Large ecosystem

Flutter:
• Uses Dart
• Built by Google
• High UI customization
• Fast rendering

React Native Advantages:
• Faster learning for React developers
• Huge community
• Native integrations

Flutter Advantages:
• Better animations
• Consistent UI
• Excellent performance

The choice depends on your project requirements and developer experience.
`,
  },

  {
    id: 8,
    title: "How to Structure a Scalable MERN Stack Project",
    slug: "scalable-mern-stack-project-structure",
    category: "Architecture",
    readTime: "7 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    description:
      "Learn the best folder structure and architecture practices for scalable MERN Stack applications.",

    content: `
A proper project structure improves scalability and maintainability.

Recommended Backend Structure:
• routes/
• controllers/
• models/
• middleware/
• utils/

Recommended Frontend Structure:
• components/
• pages/
• services/
• hooks/
• redux/

Benefits:
• Better code organization
• Easy maintenance
• Scalability
• Team collaboration
• Faster development
`,
  },

  {
    id: 9,
    title: "Best Practices for API Integration in React.js",
    slug: "api-integration-best-practices-reactjs",
    category: "React",
    readTime: "6 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",

    description:
      "Explore modern API integration techniques in React.js using Axios, async/await, interceptors, and hooks.",

    content: `
API integration is essential for dynamic React applications.

Popular API Libraries:
• Axios
• Fetch API

Best Practices:
• Use interceptors
• Handle loading states
• Handle errors properly
• Use async/await
• Create reusable services

Benefits:
• Better maintainability
• Cleaner code
• Improved scalability
• Easier debugging
`,
  },

  {
    id: 10,
    title: "Role Based Authentication in MERN Stack",
    slug: "role-based-authentication-mern-stack",
    category: "Authentication",
    readTime: "9 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",

    description:
      "Implement admin, user, and role-based authorization systems securely in MERN Stack applications.",

    content: `
Role-based authentication allows different users to access different features.

Common Roles:
• Admin
• User
• Moderator

Implementation Steps:
1. Add role field in database
2. Generate JWT token
3. Verify role using middleware
4. Protect routes

Benefits:
• Better security
• Controlled access
• Scalable permissions
• Enterprise-level architecture

Role-based systems are essential for dashboards, admin panels, and business applications.
`,
  },
];
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
  setPopup({
    show: true,
    type: "warning",
    message: "Please fill all required fields.",
  });
  return;
}

  setLoading(true);

  try {
    const response = await fetch(
      "https://rajvirintrobackend.vercel.app/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: selectedProject,
          message: formData.message,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    setPopup({
  show: true,
  type: "success",
  message: "Your message has been sent successfully.",
});

    // Reset Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setSelectedProject("");

  } catch (error) {
    console.error(error);

  setPopup({
  show: true,
  type: "error",
  message: "Failed to send message. Please try again.",
});
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    const sections = [
      "home",
      "skills",
      "work",
      "about",
      "certifications",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const inputStyle = {
    width: "100%",
    padding: "14px 20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };
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
      <nav
        style={{
          position: "fixed",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#0f1720",
          borderRadius: "50px",
          padding: "12px 25px",
          width: "90%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          zIndex: 1000,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#ffffff" }}>RAJVIRSINH </span>
          <span style={{ color: "#598565" }}>DABHI</span>
        </a>
        {/* Desktop Links */}
        <div
          className="d-none d-lg-flex"
          style={{ gap: "35px", alignItems: "center" }}
        >
          {[
  "Home",
  "Services",
  "Skills",
  "Work",
  "About",
  "Certifications",
  "Contact",
].map(
            (item, index) => {
              const sectionId = item.toLowerCase();

              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  style={{
                    color: activeSection === sectionId ? "#ffffff" : "#9BA3A7",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                  }}
                >
                  {item}

                  {/* Underline */}
                  {activeSection === sectionId && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: "2px",
                        background: "linear-gradient(90deg, #598565, #8FBF9F)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </a>
              );
            },
          )}

       <a
  href={Rajvirsinh_Dabhi_Resume}
  download="Rajvirsinh_Dabhi_Resume.pdf"
  style={{
    padding: "8px 18px",
    borderRadius: "30px",
    background: "#598565",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
  }}
>
  Download Resume
</a>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="d-lg-none">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "22px",
            }}
          >
            ☰
          </button>
        </div>
      </nav>
      {/* //NAV BAR */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            background: "#0f1720",
            borderRadius: "20px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 999,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {["Home", "Skills", "Work", "About", "Certifications", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#9BA3A7",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ),
          )}

          <a
            href={Rajvirsinh_Dabhi_Resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px",
              borderRadius: "25px",
              background: "#598565",
              color: "#fff",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Resume
          </a>
        </div>
      )}
      
      {/* HOME SECTION */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflowX: "hidden",
          marginTop:"45px"
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
               I'm Rajvirsinh Dabhi, a freelance MERN Stack Developer
building secure, scalable, and high-performance web &
mobile applications using React.js, Next.js, Node.js,
MongoDB, Express.js, REST APIs, and React Native.
              </p>

              {/* Skill Tags */}
              <div
className="mt-4 d-flex flex-nowrap gap-2 justify-content-center justify-content-lg-start"                style={{ animation: "slideUp 1.4s ease" }}
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
{/* ================= MOBILE HERO IMAGE ================= */}
<div className="d-block d-lg-none text-center mt-5">
  <div
    style={{
      position: "relative",
      width: "clamp(200px, 70vw, 260px)",
      height: "clamp(200px, 70vw, 260px)",
      margin: "0 auto",
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
     alt="Rajvirsinh Dabhi MERN Stack Developer"
      style={{
        width: "280px",
        height: "280px",
        objectFit: "contain",
        animation: "counterRotate 15s linear infinite",
      }}
    />
  </div>
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
<div className="d-none d-lg-flex col-lg-5 justify-content-center align-items-center mt-lg-0">          <div
                style={{
                  position: "relative",
                 width: "clamp(220px, 60vw, 300px)",
height: "clamp(220px, 60vw, 300px)",
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
{/* ================= SEO SERVICES SECTION ================= */}

<section
  id="services"
  style={{
    padding: "120px 20px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div className="container">

    {/* HEADER */}
    <div className="row mb-5">
      <div
        className="col-lg-8 mx-auto text-center"
        data-aos="fade-up"
      >
        <h6
          style={{
            color: "#598565",
            letterSpacing: "2px",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          SERVICES
        </h6>

        <h2
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "20px",
          }}
        >
         Full Stack Web & App Development Services
        </h2>

        <p
          style={{
            color: "#A6B0A8",
            lineHeight: "1.9",
            fontSize: "16px",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
         I am Rajvirsinh Dabhi, a freelance MERN Stack Developer
specializing in React.js, Next.js, Node.js, MongoDB,
React Native, REST APIs, and full stack web development.
        </p>

        <p
          style={{
            color: "#A6B0A8",
            lineHeight: "1.9",
            fontSize: "16px",
            marginTop: "18px",
            maxWidth: "850px",
            marginInline: "auto",
          }}
        >
          I build scalable websites, admin panels, ecommerce
          platforms, mobile applications, and custom business
          solutions for startups and companies.
        </p>
      </div>
    </div>

    {/* SERVICES GRID */}
    <div className="row g-4 mt-5">

      {[
        {
          title: "Website Development",
          desc: "Modern responsive business and portfolio websites using React.js and Next.js.",
        },
        {
          title: "MERN Stack Development",
          desc: "Full stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        },
        {
          title: "React.js Development",
          desc: "Interactive frontend UI development with scalable React architecture.",
        },
        {
          title: "Next.js Development",
          desc: "SEO optimized and high performance Next.js applications.",
        },
        {
          title: "Node.js Backend",
          desc: "Secure backend APIs, authentication systems, and scalable server architecture.",
        },
        {
          title: "REST API Development",
          desc: "Professional API development and third-party integrations.",
        },
        {
          title: "React Native Apps",
          desc: "Cross-platform Android and iOS mobile application development.",
        },
        {
          title: "Admin Dashboard",
          desc: "Advanced admin panels with analytics, CRUD operations, and role management.",
        },
        {
          title: "Ecommerce Websites",
          desc: "Custom ecommerce platforms with payment integration and dashboards.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={index * 80}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "35px",
              height: "100%",
              transition: "all 0.4s ease",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
              e.currentTarget.style.borderColor =
                "#598565";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(89,133,101,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.08)";
              e.currentTarget.style.boxShadow =
                "none";
            }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              {service.title}
            </h4>

            <p
              style={{
                color: "#A6B0A8",
                lineHeight: "1.8",
                fontSize: "15px",
              }}
            >
              {service.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* SERVICES */}
   <section id="skills" className="full-hight px-lg-5">
  <div className="container">
    
    {/* SECTION HEADER */}
   <div className="row p-4">
  <div className="col-md-8 mx-auto text-center" data-aos="fade-up">

    <h6
      style={{
        color: "#598565",
        letterSpacing: "2px",
        fontSize: "14px",
        marginBottom: "10px",
      }}
    >
      TECHNICAL EXPERTISE
    </h6>

    <h1
      style={{
        color: "#ffffff",
        fontWeight: 800,
        marginBottom: "15px",
      }}
    >
      Technology Stack
    </h1>

    <p
      style={{
        color: "#A6B0A8",
        fontSize: "15px",
        lineHeight: "1.8",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      A structured stack of modern technologies used to build scalable,
      secure, and high-performance full-stack web applications.
    </p>

  </div>
</div>

    <div className="row gy-4">

      {/* ================= FRONTEND ================= */}

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

      {/* ReactJS */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Reactjs} alt="ReactJS" />
          </div>
          <h5 className="mt-3">ReactJS</h5>
        </div>
      </div>

      {/* Redux */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Redux} alt="Redux" />
          </div>
          <h5 className="mt-3">Redux</h5>
        </div>
      </div>

      {/* MUI */}
      <div className="col-6 col-md-3" data-aos="fade-up">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Mui} alt="MUI" />
          </div>
          <h5 className="mt-3">MUI</h5>
        </div>
      </div>

      {/* NextJS */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Nextjs} alt="NextJS" />
          </div>
          <h5 className="mt-3">NextJS</h5>
        </div>
      </div>

      {/* TypeScript */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Typescript} alt="TypeScript" />
          </div>
          <h5 className="mt-3">TypeScript</h5>
        </div>
      </div>

      {/* ================= BACKEND ================= */}

      {/* NodeJS */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Nodejs} alt="NodeJS" />
          </div>
          <h5 className="mt-3">NodeJS</h5>
        </div>
      </div>

      {/* ExpressJS */}
      <div className="col-6 col-md-3" data-aos="fade-up">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={ExpressJS} alt="ExpressJS" />
          </div>
          <h5 className="mt-3">ExpressJS</h5>
        </div>
      </div>

      {/* ================= DATABASE ================= */}

      {/* MongoDB */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Mongodb} alt="MongoDB" />
          </div>
          <h5 className="mt-3">MongoDB</h5>
        </div>
      </div>

      {/* ================= AUTH ================= */}

      {/* JWT */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={jwttoken} alt="JWT Authentication" />
          </div>
          <h5 className="mt-3">JWT</h5>
        </div>
      </div>

      {/* ================= TOOLS ================= */}

      {/* Git & GitHub */}
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Github} alt="Git & GitHub" />
          </div>
          <h5 className="mt-3">Git & GitHub</h5>
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

    {/* ✅ DESKTOP PROFILE IMAGE (Only Desktop View) */}
    <div className="row">
     <div
  className="col-12 text-center mb-5"
  data-aos="zoom-in"
>
        <img
          src={profilePic}
         alt="Rajvirsinh Dabhi React Developer Portfolio"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #598565",
            boxShadow: "0 20px 60px rgba(89,133,101,0.35)",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>
    </div>

    {/* EXPERIENCE + EDUCATION GRID */}
    <div className="row gy-5">

      {/* EXPERIENCE COLUMN */}
      <div className="col-lg-6" data-aos="fade-up">
        <h4 className="mb-4 text-brand">Professional Experience</h4>

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
          </strong>.
          I specialize in <strong>REST API development</strong>,
          seamless <strong>frontend-backend integration</strong>,
          authentication, CRUD operations, and performance optimization.
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
      {/* ================= BLOGS SECTION ================= */}

<section
  id="blogs"
  style={{
    padding: "120px 20px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div className="container">

    {/* HEADER */}
    <div className="row mb-5">
      <div
        className="col-lg-8 mx-auto text-center"
        data-aos="fade-up"
      >
        <h6
          style={{
            color: "#598565",
            letterSpacing: "2px",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          BLOGS
        </h6>

        <h2
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "20px",
          }}
        >
          Latest Tech Blogs & Articles
        </h2>

        <p
          style={{
            color: "#A6B0A8",
            lineHeight: "1.9",
            fontSize: "16px",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          Explore MERN Stack development, React.js,
          Next.js, Node.js, React Native, REST APIs,
          authentication systems, scalable applications,
          deployment strategies, and modern web development.
        </p>
      </div>
    </div>

    {/* BLOG GRID */}
    <div className="row g-4">

      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className="col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={index * 80}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
              transition: "all 0.4s ease",
              height: "100%",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
              e.currentTarget.style.borderColor =
                "#598565";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(89,133,101,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.08)";
              e.currentTarget.style.boxShadow =
                "none";
            }}
          >

            {/* IMAGE */}
            <div
              style={{
                height: "230px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={`${blog.image}?auto=format&fit=crop&w=1000&q=80`}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "scale(1)";
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  background: "#598565",
                  color: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "30px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {blog.category}
              </div>
            </div>

            {/* CONTENT */}
            <div style={{ padding: "28px" }}>

              {/* META */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "13px",
                  color: "#8FA39B",
                  marginBottom: "15px",
                }}
              >
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              {/* TITLE */}
              <h4
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  fontSize: "22px",
                }}
              >
                {blog.title}
              </h4>

              {/* DESCRIPTION */}
              <p
                style={{
                  color: "#A6B0A8",
                  lineHeight: "1.8",
                  fontSize: "15px",
                  marginBottom: "24px",
                }}
              >
                {blog.description}
              </p>

              {/* BUTTON */}
            <button
  onClick={() => setSelectedBlog(blog)}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#598565",
    background: "transparent",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
>
  Read More
  <span>→</span>
</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
{/* BLOG MODAL */}

{selectedBlog && (
  <div
    className="modal fade show d-block"
    style={{
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(8px)",
      zIndex: 9999,
    }}
    onClick={() => setSelectedBlog(null)}
  >
    <div
      className="modal-dialog modal-dialog-centered modal-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="modal-content"
        style={{
          background: "#0f1720",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >

        {/* IMAGE */}
        <div
          style={{
            height: "350px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={`${selectedBlog.image}?auto=format&fit=crop&w=1200&q=80`}
            alt={selectedBlog.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <button
            onClick={() => setSelectedBlog(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "40px" }}>

          {/* CATEGORY */}
          <div
            style={{
              display: "inline-block",
              background: "#598565",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            {selectedBlog.category}
          </div>

          {/* TITLE */}
          <h2
            style={{
              color: "#ffffff",
              fontWeight: 800,
              lineHeight: "1.4",
              marginBottom: "18px",
            }}
          >
            {selectedBlog.title}
          </h2>

          {/* META */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              color: "#8FA39B",
              marginBottom: "30px",
              fontSize: "14px",
            }}
          >
            <span>{selectedBlog.date}</span>
            <span>•</span>
            <span>{selectedBlog.readTime}</span>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              color: "#A6B0A8",
              lineHeight: "2",
              fontSize: "16px",
              whiteSpace: "pre-line",
            }}
          >
            {selectedBlog.content}
          </p>
        </div>
      </div>
    </div>
  </div>
)}
      {/* CONTACT */}
 {/* CONTACT SECTION */}
<section
  id="contact"
  style={{
    padding: "100px 15px",
    minHeight: "100vh",
  }}
>
  <div className="container">

    {/* ===== SECTION HEADER ===== */}
    <div className="row mb-5">
      <div className="col-12 col-md-8 mx-auto text-center">
        <h6
          style={{
            color: "#598565",
            letterSpacing: "2px",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          CONTACT
        </h6>

        <h1
          style={{
            color: "#ffffff",
            fontWeight: 800,
            marginBottom: "15px",
            fontSize: "clamp(26px, 5vw, 40px)",
          }}
        >
          Let’s Start a Conversation
        </h1>

        <p
          style={{
            color: "#A6B0A8",
            lineHeight: "1.8",
            maxWidth: "650px",
            margin: "0 auto",
            fontSize: "15px",
          }}
        >
          Whether you need a website, full-stack web application,
          or backend API development — I’m here to help you build
          scalable and secure digital solutions.
        </p>
      </div>
    </div>

    {/* ===== MAIN CONTENT ===== */}
    <div className="row gy-5">

      {/* ================= LEFT SIDE ================= */}
      <div
        className="col-12 col-lg-5"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {[
          {
            icon: "las la-phone",
            title: "Call Me",
            value: "+91 97249 55379",
            link: "tel:9724955379",
          },
          {
            icon: "las la-envelope",
            title: "Email Me",
            value: "rajvirsinhdabhi1@gmail.com",
            link: "mailto:rajvirsinhdabhi1@gmail.com",
          },
          {
            icon: "lab la-whatsapp",
            title: "WhatsApp",
            value: "Chat on WhatsApp",
            link: "https://wa.me/919724955379",
          },
          {
            icon: "las la-map-marker",
            title: "Location",
            value: "Ahmedabad,Gujarat, India",
            link: null,
          },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => item.link && window.open(item.link, "_blank")}
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "16px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
              cursor: item.link ? "pointer" : "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "#598565";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                background:
                  item.title === "WhatsApp"
                    ? "linear-gradient(135deg, #25D366, #128C7E)"
                    : "linear-gradient(135deg, #598565, #3D6B49)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              <i className={item.icon}></i>
            </div>

            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#8FA39B",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RIGHT SIDE FORM ================= */}
      <div className="col-12 col-lg-7">
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            padding: "clamp(25px, 5vw, 50px)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
          }}
        >
          <h4
            style={{
              color: "#ffffff",
              marginBottom: "25px",
              fontWeight: 700,
            }}
          >
            Send me a message
          </h4>

<form onSubmit={handleSubmit}>       
       <div className="row g-4">


              <div className="col-12 col-md-6">
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  placeholder="Full Name"
  style={inputStyle}
/>              </div>

              <div className="col-12 col-md-6">
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  placeholder="Email Address"
  style={inputStyle}
/>              </div>

              <div className="col-12 col-md-6">
<input
  type="tel"
  name="phone"
  value={formData.phone}
  maxLength={10}
  inputMode="numeric"
  pattern="[0-9]*"
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove non-numbers
    if (onlyNumbers.length <= 10) {
      setFormData({ ...formData, phone: onlyNumbers });
    }
  }}
  placeholder="Phone Number"
  style={inputStyle}
/>         </div>

         <div className="col-12 col-md-6" style={{ position: "relative" }}>

  {/* Selected Box */}
  <div
    onClick={() => setOpenDropdown(!openDropdown)}
    style={{
      ...inputStyle,
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      userSelect: "none",
    }}
  >
    {selectedProject || "Select Project Type"}
    <span style={{ fontSize: "12px" }}>
      {openDropdown ? "▲" : "▼"}
    </span>
  </div>

  {/* Dropdown Options */}
  {openDropdown && (
    <div
      style={{
        position: "absolute",
        width: "100%",
        background: "#1a1f24",
        borderRadius: "12px",
        marginTop: "8px",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {[
        "Business Website",
        "E-commerce Website",
        "Web Application",
        "Full Stack Application",
        "Admin Dashboard",
        "Backend API Development",
        "Other",
      ].map((option, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedProject(option);
            setOpenDropdown(false);
          }}
          style={{
            padding: "12px 16px",
            cursor: "pointer",
            color: "#ffffff",
            fontSize: "14px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "rgba(89,133,101,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )}
</div>

              <div className="col-12">
              <textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
  placeholder="How can I help you?"
  style={{ ...inputStyle, resize: "none" }}
/>
              </div>

              <div className="col-12">
              <button
  type="submit"
  disabled={loading}
  style={{
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg, #598565, #8FBF9F)",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "15px",
    boxShadow: "0 10px 25px rgba(89,133,101,0.35)",
    opacity: loading ? 0.7 : 1,
    cursor: loading ? "not-allowed" : "pointer",
  }}
>
  {loading ? "Sending..." : "Send Message"}
</button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="px-lg-5 py-4">
        <div className="container m-4">
          <div className="row justify-content-between gy-4">
            <div className="col-auto mb-0">
             <div>
  <p style={{ marginBottom: "6px" }}>
    Designed By Rajvirsinh Dabhi
  </p>

  <p
    style={{
      fontSize: "13px",
      color: "#A6B0A8",
      lineHeight: "1.7",
      maxWidth: "500px",
    }}
  >
    Rajvirsinh Dabhi (Rajvir) is a MERN Stack Developer
    specializing in React.js, Next.js, Node.js, MongoDB,
    React Native, REST APIs, web development,
    and mobile app development.
  </p>
</div>
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
{popup.show && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      animation: "fadeIn 0.3s ease",
    }}
  >
    <div
      style={{
        width: "90%",
        maxWidth: "420px",
        background: "#0f1720",
        borderRadius: "20px",
        padding: "35px 30px",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        textAlign: "center",
        animation: "slideUp 0.4s ease",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "70px",
          height: "70px",
          margin: "0 auto 20px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          color: "#fff",
          background:
            popup.type === "success"
              ? "linear-gradient(135deg, #598565, #8FBF9F)"
              : popup.type === "warning"
              ? "linear-gradient(135deg, #f59e0b, #fbbf24)"
              : "linear-gradient(135deg, #ef4444, #f87171)",
        }}
      >
        {popup.type === "success"
          ? "✓"
          : popup.type === "warning"
          ? "!"
          : "✕"}
      </div>

      {/* TITLE */}
      <h4
        style={{
          color: "#ffffff",
          fontWeight: 700,
          marginBottom: "15px",
        }}
      >
        {popup.type === "success"
          ? "Success"
          : popup.type === "warning"
          ? "Warning"
          : "Error"}
      </h4>

      {/* MESSAGE */}
      <p
        style={{
          color: "#A6B0A8",
          fontSize: "14px",
          lineHeight: "1.7",
          marginBottom: "30px",
        }}
      >
        {popup.message}
      </p>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setPopup({ ...popup, show: false })}
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "transparent",
            color: "#A6B0A8",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Close
        </button>

        <button
          onClick={() => setPopup({ ...popup, show: false })}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(90deg, #598565, #8FBF9F)",
            color: "#ffffff",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
)}    </div>
  );
};

export default Homepage;
