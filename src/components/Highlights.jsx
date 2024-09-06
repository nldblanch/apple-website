import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";
const Highlights = () => {
  useGSAP(() => {


    animateWithGsap(
      "#title",
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      {
        start: "20% bottom",
      }
    );
    animateWithGsap(
      "#link1",
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      {
        start: "80% bottom",
      }
    );
    animateWithGsap(
      "#link2",
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      {
        start: "150% bottom",
      }
    );
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p id="link1" className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p id="link2" className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
