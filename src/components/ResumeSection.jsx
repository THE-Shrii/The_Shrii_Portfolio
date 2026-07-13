import toolPhotoshop from "../assets/icons/icon-photoshop.svg";
import toolFigma from "../assets/icons/icon-figma.svg";
import toolIllustrator from "../assets/icons/icon-illustrator.svg";
import toolSketch from "../assets/icons/icon-scketch.svg";
import toolBlender from "../assets/icons/icon-blender.svg";
import toolHtml from "../assets/icons/icon-html.svg";
import toolCss from "../assets/icons/icon-css.svg";
import toolNotion from "../assets/icons/icon-notion.svg";
import avatarT01 from "../assets/images/400x400_t01.webp";
import avatarT02 from "../assets/images/400x400_t02.webp";

const education = [
  {
    date: "2015 - 2016",
    title: "Drawing Concentration",
    source: "New York Academy of Art",
    description:
      "Intensive drawing courses that present the fundamental principles of drawing.",
  },
  {
    date: "2019 - 2021",
    title: "UI/UX Design Specialization",
    source: "California Institute of Arts",
    description:
      "Research, design, and prototype effective, visually-driven websites and apps.",
  },
  {
    date: "2022",
    title: "UI/UX Designer",
    source: "Coursera",
    description:
      "This cource is about how to complete the design process from beginning to end.",
  },
];

const experience = [
  {
    date: "2018 - 2019",
    title: "Illustrator",
    source: "Creative Mind",
    description:
      "I created original images for a range of digital and printed products.",
  },
  {
    date: "2019 - 2021",
    title: "Graphic Designer",
    source: "Moon Light",
    description:
      "My job was to create adverts, branding, signage and other media products.",
  },
  {
    date: "2021 - now",
    title: "UI/UX Designer",
    source: "Moon Light",
    description:
      "I am actively involved in creating user interfaces for mobile apps and websites.",
  },
];

const tools = [
  { name: "Photoshop", icon: toolPhotoshop },
  { name: "Figma", icon: toolFigma },
  { name: "Illustrator", icon: toolIllustrator },
  { name: "Sketch", icon: toolSketch },
  { name: "Blender", icon: toolBlender },
  { name: "HTML5", icon: toolHtml },
  { name: "CSS3", icon: toolCss },
  { name: "Notion", icon: toolNotion },
];

const testimonials = [
  {
    author: "Alex Tomato",
    role: "Brand Manager in Instant Design",
    avatar: avatarT01,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.",
  },
  {
    author: "Jenny Pineapple",
    role: "SEO in Creative People",
    avatar: avatarT02,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.",
  },
];

function ResumeSection() {
  return (
    <section id="resume" className="inner resume">
      <div className="content__block block-large">
        <p className="h2__subtitle animate-in-up">
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
          <span>Resume</span>
        </p>
        <h2 className="h2__title animate-in-up">
          Education and practical experience
        </h2>
        <p className="h2__text animate-in-up">
          Be what you would seem to be - or, if you'd like it put more simply -
          never imagine yourself not to be otherwise than what it might appear
          to others that what you were or{" "}
          <a href="#0" className="text-link">
            might have been
          </a>{" "}
          was not otherwise than what you had been would have appeared to them
          to be otherwise.
        </p>
      </div>
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">My education</h3>
        </div>
        <div className="container-fluid p-0 resume-lines">
          {education.map((item) => (
            <div
              className="row g-0 resume-lines__item animate-in-up"
              key={item.title}
            >
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">
                  {item.date}
                </span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">
                  {item.title}
                </h5>
                <p className="resume-lines__source animate-in-up">
                  Course by{" "}
                  <a
                    href="#0"
                    className="text-link-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source}
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">Work experience</h3>
        </div>
        <div className="container-fluid p-0 resume-lines">
          {experience.map((item) => (
            <div
              className="row g-0 resume-lines__item animate-in-up"
              key={item.title}
            >
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">
                  {item.date}
                </span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">
                  {item.title}
                </h5>
                <p className="resume-lines__source animate-in-up">
                  in the{" "}
                  <a
                    href="#0"
                    className="text-link-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source}
                  </a>{" "}
                  agency
                </p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content__block">
        <div className="section-h3 section-h3-grid">
          <h3 className="h3__title animate-in-up">My favourite tools</h3>
        </div>
      </div>
      <div className="content__block grid-block block-large">
        <div className="tools-cards d-flex justify-content-start flex-wrap">
          {tools.map((tool) => (
            <div
              className="tools-cards__item d-flex grid-item-s animate-card-5"
              key={tool.name}
            >
              <div className="tools-cards__card">
                <img
                  className="tools-cards__icon animate-in-up"
                  src={tool.icon}
                  alt="Tools Icon"
                />
                <h6 className="tools-cards__caption animate-in-up">
                  {tool.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content__block section-title">
        <p className="h2__subtitle animate-in-up">
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
          <span>Testimonials</span>
        </p>
        <h2 className="h2__title animate-in-up">Clients say about me</h2>
      </div>
      <div className="content__block">
        <div className="testimonials-slider">
          <div className="swiper-testimonials">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial) => (
                <div className="swiper-slide" key={testimonial.author}>
                  <div className="testimonials-card animate-in-up">
                    <div className="testimonials-card__tauthor d-flex animate-in-up">
                      <div className="tauthor__avatar">
                        <img src={testimonial.avatar} alt="Review Author" />
                      </div>
                      <div className="tauthor__info d-flex flex-column justify-content-center">
                        <p className="tauthor__name">{testimonial.author}</p>
                        <p className="tauthor__position">{testimonial.role}</p>
                        <div className="tauthor__rating d-flex">
                          {[...Array(5)].map((_, index) => (
                            <i className="ph-fill ph-star" key={index}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="testimonials-card__descr animate-in-up">
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="testimonials-card__btnholder animate-in-up">
                      <a
                        className="btn mobile-vertical btn-line btn-transparent slide-right"
                        href="#0"
                      >
                        <span className="btn-caption">Project Page</span>
                        <i className="ph-bold ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-prev mxd-slider-btn-square mxd-slider-btn-square-prev animate-in-up">
              <a
                className="btn btn-square btn-square-s btn-outline slide-left"
                href="#0"
              >
                <i className="ph-bold ph-caret-left"></i>
              </a>
            </div>
            <div className="swiper-button-next mxd-slider-btn-square mxd-slider-btn-square-next animate-in-up">
              <a
                className="btn btn-square btn-square-s btn-outline slide-right"
                href="#0"
              >
                <i className="ph-bold ph-caret-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
