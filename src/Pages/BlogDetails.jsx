import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import Rajvirsinh_Dabhi_Resume from "../Assets/pdf/Rajvirsinh Dabhi Resume1.pdf";
// import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0d1117",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Blog Not Found</h1>
      </div>
    );
  }

 return (
<>
  <Helmet>
    <title>{blog.title}</title>

    <meta
      name="description"
      content={blog.description}
    />

    <meta
      name="keywords"
      content={`
        ${blog.title},
        MERN Stack,
        React.js,
        Next.js,
        Node.js,
        MongoDB,
        Full Stack Development
      `}
    />

    <link
      rel="canonical"
      href={`https://rajvirsinhdabhi.vercel.app/blog/${blog.slug}`}
    />

    <meta
      property="og:title"
      content={blog.title}
    />

    <meta
      property="og:description"
      content={blog.description}
    />

    <meta
      property="og:image"
      content={blog.image}
    />

   <meta
  property="og:type"
  content="article"
/>

<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.title,
  description: blog.description,
  image: blog.image,
  author: {
    "@type": "Person",
    name: "Rajvirsinh Dabhi"
  },
  publisher: {
    "@type": "Person",
    name: "Rajvirsinh Dabhi"
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://rajvirsinhdabhi.vercel.app/blog/${blog.slug}`
  }
})}
</script>

</Helmet>
    <div
      style={{
        background: "#0d1117",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SAME HOMEPAGE BACKGROUND */}
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

      {/* NAVBAR */}
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
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#ffffff" }}>RAJVIRSINH </span>
          <span style={{ color: "#598565" }}>DABHI</span>
        </Link>

        <a
          href={Rajvirsinh_Dabhi_Resume}
          download
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
          Resume
        </a>
      </nav>

      {/* BLOG CONTENT */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "140px 20px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "clamp(2rem,5vw,3.5rem)",
            lineHeight: "1.3",
            marginBottom: "20px",
          }}
        >
          {blog.title}
        </h1>

        <p
          style={{
            color: "#A6B0A8",
            marginBottom: "30px",
          }}
        >
          {blog.date} • {blog.readTime}
        </p>

        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            color: "#d1d5db",
            lineHeight: "2",
            fontSize: "17px",
            whiteSpace: "pre-line",
          }}
        >
          {blog.content}
          <hr
  style={{
    marginTop: "50px",
    marginBottom: "30px"
  }}
/>

<h3>About the Author</h3>

<p>
  Rajvirsinh Dabhi is a MERN Stack Developer
  specializing in React.js, Next.js, Node.js,
  MongoDB, Express.js, React Native, REST APIs,
  Full Stack Web Development and scalable
  web applications.
</p>
        </div>

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <Link
            to="/"
            style={{
              padding: "14px 28px",
              borderRadius: "40px",
              background:
                "linear-gradient(90deg, #598565, #8FBF9F)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ← Back To Home
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "80px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "40px 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <p
              style={{
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              Designed By Rajvirsinh Dabhi
            </p>

            <p
              style={{
                color: "#A6B0A8",
                maxWidth: "500px",
                lineHeight: "1.8",
              }}
            >
              MERN Stack Developer specializing in
              React.js, Next.js, Node.js, MongoDB,
              React Native, REST APIs and scalable
              web applications.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/rajvirsinh08"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#598565",
                textDecoration: "none",
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rajvirsinh-dabhi-0b9320253/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#598565",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default BlogDetails;