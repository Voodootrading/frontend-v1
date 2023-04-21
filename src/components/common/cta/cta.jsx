import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div
      className="tp-news-letter-area tp-news-letter-bg pt-200 pb-150"
      style={{ backgroundImage: "url(/assets/img/news/news-bg.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 ">
            <div className="tp-news-sub-wrapper text-center">
              <div className="tp-news-letter-section-box">
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">
                  Get a complete roadmap to creating and implementing a
                  profitable trading strategy
                </h2>
                <p className="text-white pb-35">
                  Developing a profitable trading strategy is intimidating -
                  you're not sure where to start, what to trade, how to buy, how
                  much to buy, how to exit and how to consistently execute to
                  make money. You need a step-by-step guide. In this online
                  course you'll learn how to create a profitable trading
                  strategy that matches your personality. Get expert instruction
                  in building a rules-based trading strategy that's easy to
                  understand and consistently execute.
                </p>
              </div>
              <div className="tp-news-button">
                <Link href="/contact">
                  <a className="tp-btn-lg-yellow">Check Courses</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
