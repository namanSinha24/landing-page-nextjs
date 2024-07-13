"use client";
import { useEffect, useState } from "react";
import styles from "./platformSteps.module.css";
import Image from "next/image";

export default function PlatformSteps() {
  const [scrollY, setScrollY] = useState(0);
  const [reachedScrollPosition, setReachedScrollPosition] = useState(false);
  const platformSteps = [
    {
      heading: "Elevate Your SEO and Content Strategy",
      subheading1:
        "Optimize your online presence with our advanced SEO tools and content management systems. Our algorithms boost content ranking, increasing traffic and engagement. Enjoy a user-friendly interface for effortless, superior SEO and content results.",
      subheading2:
        "We ensure your content ranks higher, driving more traffic and engagement.",
      img: require("../../../public/Assets/step1.jpg"),
      caption: "image1",
    },
    {
      heading: "Master Digital Advertising with Precision",
      subheading1:
        "Dive into the realm of targeted, effective digital advertising with Consumable AI. Our platform utilizes cutting-edge AI to analyze market trends and consumer behavior, enabling you to craft ads that resonate with your audience.",
      subheading2:
        "Experience increased ROI with our smart ad placement and optimization features, ensuring your message reaches the right people at the right time.",
      img: require("../../../public/Assets/step2.jpg"),
      caption: "image2",
    },
    {
      heading: "Streamlined Workflow for Efficient Content Creation",
      subheading1:
        "Simplify content creation with our integrated workflow tools. From planning to publishing, collaborate easily and maintain quality. Streamline your content strategy for better efficiency and consistency.",
      img: require("../../../public/Assets/step3.jpg"),
      caption: "image3",
    },
  ];
  const platformImg = [
    require("../../../public/Assets/step1.jpg"),
    require("../../../public/Assets/step2.jpg"),
    require("../../../public/Assets/step3.jpg"),
  ];
  const [currentImg, setCurrentImg] = useState(platformImg[0]);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const scrolledPixels = window.scrollY;

      const transitionScrollPosition = 2210;

      if (window.scrollY >= transitionScrollPosition) {
        setReachedScrollPosition(true);
      } else {
        setReachedScrollPosition(false);
      }

      setScrollY(scrolledPixels);
      if (scrolledPixels < 3550) {
        setCurrentImg(platformImg[0]);
      } else if (scrolledPixels >= 3550 && scrolledPixels < 4400) {
        setCurrentImg(platformImg[1]);
      } else {
        setCurrentImg(platformImg[2]);
      }
    };

    // Add an event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const circleRadius = 300; // Adjust the radius as needed
  const angle = (-scrollY % 360) * (Math.PI / 180) * 0.5; // Use a negative sign

  const pointPosX = circleRadius + 8 + circleRadius * Math.sin(angle) - 10; // Adjust point size (10px) as needed
  const pointPosY = circleRadius - circleRadius * Math.cos(angle) - 10; // Adjust point size (10px) as needed

  const oppositeAngle = (scrollY * 0.5 - 180) * (Math.PI / 180); // Use a negative angle offset

  const point2X =
    circleRadius + 8 + circleRadius * Math.sin(oppositeAngle) - 10;
  const point2Y = circleRadius - circleRadius * Math.cos(oppositeAngle) - 10;

  const isFirstImage = currentImg === platformImg[0];
  return (
    <div className={styles.platform_steps_container}>
      <div className={styles.platform_steps_topDiv}>
        <h2 className={styles.platform_steps_topDiv_heading}>
          <span
            className={`${styles.platform_heading_left} ${reachedScrollPosition ? styles.reached_platform_transition : ""
              }`}
          >
            our platform
          </span>
          <span
            className={`${styles.platform_heading_right} ${reachedScrollPosition ? styles.reached_platform_transition : ""
              }`}
          >
            in three steps
          </span>
        </h2>
      </div>
      <div className={styles.platform_steps_bottomDiv}>
        <div className={styles.platform_steps_textDiv}>
          {platformSteps?.map((step, index) => (
            <div className={styles.platform_steps_bottom_div_item} key={index}>
              <div className={styles.platform_steps_texts}>
                <h2>{step?.heading}</h2>
                <p>{step?.subheading1}</p>
                <p>{step?.subheading2}</p>
                <Image
                  width={400}
                  height={400}
                  src={step?.img}
                  alt={step?.caption}
                  className={
                    index === 0
                      ? styles.first_image_class
                      : styles.platform_img_small_screen
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.platform_steps_ImagesDiv}>
          <div className={styles.background_image_circle}></div>
          <Image
            width={400}
            height={400}
            src={currentImg}
            alt="text-img"
            className={`${styles.platform_img} ${isFirstImage
              ? styles.first_image_class_full_size
              : styles.rest_image_class_full_size
              }`}
          />
          <div className={styles.platform_img_circle_div}>
            <div className={styles.circle_div_innerCircle1}></div>
            <div
              className={styles.circle_div_innerCircle2}
              style={{ top: point2Y, left: point2X }}
            ></div>
            <div
              className={styles.circle_div_innerCircle3}
              style={{ top: pointPosY, left: pointPosX }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
