import React from "react";

const hero_contents = {
  shapes: [
    "hero-shape-5.1.png",
    "hero-shape-4.png",
    "hero-shape-4.png",
    "hero-shape-5.2.png",
  ],
  title: "Trade Smarter",
  highlight_text: "Trade Better",
  short_text: (
    <>
      Our goal at Voodoo Trading is to provide you with a complete roadmap to{" "}
      <br /> creating and implementing a profitable systematic trading strategy!
    </>
  ),
  hero_img: "/assets/img/hero/hero-5.1.png",
  social_links: [
    {
      num: 1,
      icon: "fab fa-facebook-f social-icon-1",
      title: "Facebook",
      link: "http://facebook.com",
    },
    {
      num: 3,
      icon: "fab fa-youtube social-icon-3",
      title: "Youtube",
      link: "https://www.youtube.com/",
    },
    {
      num: 2,
      icon: "fab fa-twitter social-icon-2",
      title: "Twitter",
      link: "http://twitter.com",
    },
    {
      num: 2,
      icon: "fab fa-behance social-icon-2",
      title: "Behance",
      link: "https://www.behance.net/",
    },
  ],
  submit_text: "Free Consultation",
};

const {
  hero_img,
  highlight_text,
  shapes,
  short_text,
  subtitle,
  title,
  social_links,
  submit_text,
} = hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area tp-hero-border fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="tp-hero-section-box-five">
              <div className="tp-hero-section-box-five__title pb-45 pt-70 pt-lg-50">
                <h3
                  className="tp-hero-bs-title wow tpfadeUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".7s"
                >
                  {title}
                  <span className="tp-highlight">
                    <svg
                      className="highlight-space"
                      width="266"
                      height="12"
                      viewBox="0 0 266 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path d="M0 0L266 12H0V0Z" fill="#FFDC60" />
                    </svg>
                    <i>{highlight_text}</i>
                  </span>
                </h3>
                <p
                  className="wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  {short_text}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="tp-hero-right-side-five p-relative">
              <div className="tp-yellow-circle-five"></div>
              <div
                className="tp-hero-right-side-five__img wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay="1.2s"
              >
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
