import work01 from "../assets/images/800_w01-thumb.webp";
import work02 from "../assets/images/800_w02-thumb.webp";
import work03 from "../assets/images/800_w03-thumb.webp";
import work04 from "../assets/images/800_w04-thumb.webp";

const works = [
  {
    thumb: work01,
    large: "/img/works/1400x1400_w01.webp",
    title: "Isometric House",
    tags: ["Illustrations", "3D Render"],
    description:
      "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.",
    opposite: true,
  },
  {
    thumb: work02,
    large: "/img/works/1400x1400_w02.webp",
    title: "Dashboard Template",
    tags: ["UI Design", "Figma"],
    description:
      "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio, a mollis ipsum tristique eu.",
    opposite: false,
  },
  {
    thumb: work03,
    large: "/img/works/1400x1400_w03.webp",
    title: "Notification Icon",
    tags: ["Illustrations", "3D Render"],
    description:
      "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio, a mollis ipsum tristique eu.",
    opposite: false,
  },
  {
    thumb: work04,
    large: "/img/works/1400x1400_w04.webp",
    title: "Smart Penguin",
    tags: ["Illustrations", "AI Experiment"],
    description:
      "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio, a mollis ipsum tristique eu.",
    opposite: true,
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="inner inner-first portfolio">
      <div className="content__block section-grid-title">
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
          <span>Portfolio</span>
        </p>
        <h2 className="h2__title animate-in-up">
          Check out my featured projects
        </h2>
      </div>
      <div className="content__block grid-block">
        <div className="container-fluid px-0 inner__gallery">
          <div
            className="row gx-0 my-gallery"
            itemscope
            itemType="http://schema.org/ImageGallery"
          >
            {works.map((work, index) => (
              <figure
                className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                itemProp="associatedMedia"
                itemScope
                itemType="http://schema.org/ImageObject"
                key={work.title}
              >
                <a
                  href={work.large}
                  data-image={work.large}
                  className="gallery__link"
                  itemProp="contentUrl"
                  data-size="1400x1400"
                >
                  <img
                    src={work.thumb}
                    className="gallery__image"
                    itemProp="thumbnail"
                    alt={work.title}
                  />
                </a>
                <figcaption
                  className={`gallery__descr${work.opposite ? " opposite" : ""}`}
                  itemProp="caption description"
                >
                  <h5 className={work.opposite ? "opposite" : ""}>
                    {work.title}
                  </h5>
                  <div className="card__tags d-flex flex-wrap">
                    {work.tags.map((tag) => (
                      <span
                        className={`rounded-tag${work.opposite ? " opposite" : ""}`}
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="small">{work.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
