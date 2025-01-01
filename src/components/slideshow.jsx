/**
 * An animated slideshow.
 * Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Slideshow({ images = [], interval = 5000 }) {
  const [thumbnails, setThumbnails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setThumbnails(images);
    setCurrentSlideStyle({
      display: "block",
      backgroundImage: `url('${images[currentSlide]}')`,
    });

    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);

    return () => clearInterval(loop);
  }, [images, currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="projects-slider">
      <article>
        <Link to="projects">
          <h2 class="slideshow-button">Projects</h2>
          <div className="slide-holder ">
            <section className="slideshow current-slide fader">
              <div style={currentSlideStyle} className="slide-thumbnail"></div>
            </section>
          </div>
        </Link>
        <div className="slideshow-controller">
          <a className="prev" onClick={previous}>
            &#10094;
          </a>
          <a className="next" onClick={next}>
            &#10095;
          </a>
        </div>
      </article>
    </div>
  );
}
