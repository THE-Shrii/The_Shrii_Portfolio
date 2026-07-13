import avatarImage from "../assets/images/shrii.png";

const socialLinks = [
  { href: "www.linkedin.com/in/shristi-kumari01", icon: "ph-linkedin-logo" },
  { href: "https://github.com/THE-Shrii", icon: "ph-github-logo" },
  { href: "https://www.instagram.com/the_.shrii/", icon: "ph-instagram-logo" },
  {
    href: "https://youtube.com/@shristikumari5256?si=VY0HlHY_vuJ3e1RX",
    icon: "ph-youtube-logo",
  },
  { href: "https://pin.it/25oQgBkpG/", icon: "ph-pinterest-logo" },
];

function Sidebar() {
  return (
    <div id="avatar" className="avatar">
      <div className="avatar__container d-flex flex-column justify-content-lg-between">
        <div className="avatar__block">
          <div className="avatar__logo d-flex align-items-center">
            <div className="logo__image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85"
                height="85"
                viewBox="0 0 85 85"
                className="gradient-fill"
              >
                <defs>
                  <linearGradient
                    id="gradientFill"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="var(--secondary)" />
                  </linearGradient>
                </defs>

                {/* Rounded Border */}
                <rect
                  x="2"
                  y="2"
                  width="81"
                  height="81"
                  rx="20"
                  ry="20"
                  fill="none"
                  stroke="url(#gradientFill)"
                  strokeWidth="2.5"
                />

                {/* Letter S */}
                <path
                  d="
      M55 24
      C55 18 50 15 42 15
      C33 15 28 20 28 27
      C28 34 34 37 42 39
      C50 41 55 43 55 50
      C55 57 49 62 41 62
      C33 62 28 58 28 52"
                  fill="none"
                  stroke="url(#gradientFill)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="logo__caption">
              <p>
                Shristi
                <br />
                Kumari
              </p>
            </div>
          </div>
          <div className="avatar__image">
            <img
              src={avatarImage}
              alt="Braxton - Personal Portfolio & Resume HTML Template Avatar"
            />
          </div>
        </div>
        <div className="avatar__block mt-2">
          <h6>
            <small className="top">Specialization:</small>
            Frontend Developer
          </h6>
        </div>
        <div className="avatar__block mb-2">
          <h6>
            <small className="top">Based in:</small>
            Bokaro, Jharkhand, India
          </h6>
        </div>
        <div className="avatar__block">
          <div className="avatar__socials">
            <ul className="socials-square d-flex justify-content-between">
              {socialLinks.map((link) => (
                <li className="socials-square__item" key={link.icon}>
                  <a
                    className="socials-square__link btn"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`ph-bold ${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="avatar__btnholder">
            <a
              className="btn btn-default btn-fullwidth btn-hover btn-hover-accent"
              href="#contact"
              target="_blank"
              rel="noreferrer"
            > 
              <span className="btn-caption">Let's Work Together!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
