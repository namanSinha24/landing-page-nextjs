"use client";
// import "font-awesome/css/font-awesome.min.css";
import styles from "./layout4.module.css";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
// import Carousel from "./SplideCorousel";
import VerticalCarousel from "./verticalCarousel";
import Carousel from "./splideCarousel";

export default function Layout3() {
  const [scrollY, setScrollY] = useState(0);
  const [bottomDivScroll, setBottomDivScroll] = useState(250);
  const [displayScrollVal, setDisplayScrollVal] = useState(6300);
  const [reachedScrollPosition, setReachedScrollPosition] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial window size on component mount
    handleResize();

    // Add event listener to update window size on resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that effect only runs on mount and unmount

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPixels = window.scrollY;
      setScrollY(scrolledPixels);
      const transitionScrollPosition = 5400;

      if (window.scrollY >= transitionScrollPosition) {
        setReachedScrollPosition(true);
      } else {
        setReachedScrollPosition(false);
      }
    };

    if (typeof window !== 'undefined') {
      // Add an event listener to track scroll position
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    // Log the current window size whenever it changes
    if (typeof window !== 'undefined') {
      const isSmallScreen = windowSize.width <= 770;
      const isMediumScreen = windowSize.width >= 770 && windowSize.width < 1085;
      if (isSmallScreen) {
        setBottomDivScroll(-60);
        setDisplayScrollVal(4000);
      } else if (isMediumScreen) {
        setBottomDivScroll(Math.min(scrollY - 6750, -100));
        setDisplayScrollVal(6450);
      } else {
        setBottomDivScroll(Math.min(scrollY - 6725, -50));
        setDisplayScrollVal(6200);
      }
    }
  }, [windowSize, scrollY]);


  const textArray = [
    "to products recalled",
    "to identify stock issues",
    "to monitor our billboards",
    "nationwide maintenance checks",
    "real-time product data",
    "eyes across the UK",
    "competitor pricing information",
    "to check the lights are on",
    "help verifying staff procedure",
  ];
  // const bottomDivScroll = Math.min(scrollY - 7350, 250);
  return (
    <div className={styles.case_study_outermost_div}>
      <div className={styles.layout3_text_div}>
        <h2 className={styles.platform_steps_topDiv_heading}>
          <span
            className={`${styles.case_study_heading_left} ${reachedScrollPosition ? styles.reached_caseStudy_transition : ""
              }`}
          >
            bespoke solutions
          </span>
          <span
            className={`${styles.case_study_heading_right} ${reachedScrollPosition ? styles.reached_caseStudy_transition : ""
              }`}
          >
            for every business
          </span>
        </h2>
      </div>
      <div className={styles.layout3_caseStudies}>
        <div className={styles.caseStudies_inner_container}>
          <div className={styles.caseStudys_container_left_div}>
            <p style={{ marginBottom: "" }}>Case Studies</p>
            <h2 style={{ marginTop: 0 }}>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignContent: "flex-end",
                }}
              >
                <span>Helping</span>
                <span className={styles.case_study_typewriter_text}>
                  <Typewriter
                    options={{
                      strings: [
                        "Shopkeeper",
                        "Retailer",
                        "Businesses",
                        "Marketers",
                        "Landlords",
                        "World",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <span>make, data-driven decisions</span>
            </h2>
            {/* <h2>make, data-driven decisions</h2> */}
          </div>
          <div className={styles.caseStudys_container_right_div}>
            <p>
              See firsthand how our innovative on-demand data solutions are
              transforming businesses.
            </p>
            <p className="flex items-center gap-2">
              <a href="/casestudies">Browse all Case Studies</a>
              <i>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="arrow-right"
                  className="svg-inline--fa fa-arrow-right ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={20}
                >
                  <path
                    fill="#00C389"
                    d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z"
                  ></path>
                </svg>
              </i>
            </p>
          </div>
        </div>
        <div
          id={styles.caseStudyContainer}
          className={styles.caseStudy_items_div}
        >
          <Carousel />
          {/* <ScrollContainer horizontal={true} className="row-caseStudies">
        {caseStudies.map((ele, index) => (
          <div key={index} className="caseStudy-item">
            <div className="image-container">
              <div className="tags">
                {ele.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
              <img
                src={ele.img}
                alt={ele.name}
                className="caseStudy-image"
              />
              <p className="image-caption case-study-image-caption">
                {ele.name}
              </p>
            </div>
          </div>
        ))}
      </ScrollContainer> */}
        </div>
      </div>
      <div
        className={styles.case_study_bottom_movable_div}
        style={{

          bottom: reachedScrollPosition ? 0 : 250,
          display: scrollY >= displayScrollVal ? "" : "none",

          top: bottomDivScroll,
        }}
      >
        <VerticalCarousel textArray={textArray} />
      </div>
    </div>
  );
}