import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem("braxton-theme");
    return (
      stored ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
    window.localStorage.setItem("braxton-theme", theme);
  }, [theme]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 5000);
  };

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", icon: "ph-house-simple" },
      { id: "portfolio", label: "Portfolio", icon: "ph-squares-four" },
      { id: "about", label: "About Me", icon: "ph-user" },
      { id: "resume", label: "Resume", icon: "ph-article" },
      { id: "contact", label: "Contact", icon: "ph-envelope" },
    ],
    [],
  );

  return (
    <>
      <Loader />
      <Header
        navItems={navItems}
        theme={theme}
        toggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />

      <div className="gradient-background">
        <div className="blur"></div>
        <div className="blur"></div>
        <div className="blur"></div>
      </div>

      <Sidebar />

      <div id="content" className="content">
        <div className="content__wrapper">
          <section id="home" className="main intro">
            <div
              id="headline"
              className="headline d-flex align-items-start flex-column"
              data-speed="1"
            >
              <p className="headline__subtitle animate-headline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="13px"
                  height="13px"
                  viewBox="0 0 13 13"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                  />
                </svg>
                <span>Let's Grow Together!</span>
              </p>
              <h1 className="headline__title animate-headline">
                I'm Shristi Kumari
                <br />
                Web Designer and Frontend Developer.
              </h1>
              <div className="headline__btnholder d-flex flex-column flex-sm-row">
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
                  href="#portfolio"
                >
                  <span className="btn-caption">My Works</span>
                  <i className="ph-bold ph-squares-four"></i>
                </a>
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline"
                  href="#0"
                >
                  <span className="btn-caption">Download CV</span>
                  <i className="ph-bold ph-download-simple"></i>
                </a>
              </div>
            </div>
            <div className="rotating-btn">
              <a href="#portfolio" className="rotating-btn__link slide-down">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 120 120"
                  style={{ enableBackground: "new 0 0 120 120" }}
                  xmlSpace="preserve"
                  className="animate-rotation"
                  data-value="360"
                >
                  <defs>
                    <path
                      id="textPath"
                      d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"
                    />
                  </defs>
                  <g>
                    <use xlinkHref="#textPath" fill="none"></use>
                    <text>
                      <textPath xlinkHref="#textPath">
                        Scroll for More * Scroll for More *{" "}
                      </textPath>
                    </text>
                  </g>
                </svg>
                <i className="ph-bold ph-arrow-down"></i>
              </a>
            </div>
          </section>

          <PortfolioSection />
          <AboutSection />
          <ResumeSection />
          <ContactSection
            formState={formState}
            setFormState={setFormState}
            submitted={submitted}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
