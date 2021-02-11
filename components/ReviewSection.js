import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel Lorem, ",
    desc:
      "ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam in!Quibusdam quas dolore eaque asperiores nulla dicta ipsam aperiam inventoredolorum sint sunt libero explicabo labore, nam qui, minima incidunt! Quod dolore corporis perspiciatis sequi recusandae atque fuga officia, iste adipisci veniamquia odio dolorum voluptatem asperiores doloribus quidem.",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    desc:
      "ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam in!Quibusdam quas dolore eaque asperiores nulla dicta ipsam aperiam inventoredolorum sint sunt libero explicabo labore, nam qui, minima incidunt! Quod dolore corporis perspiciatis sequi recusandae atque fuga officia, iste adipisci veniamquia odio dolorum voluptatem asperiores doloribus quidem.",

    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    desc:
      "ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam in!Quibusdam quas dolore eaque asperiores nulla dicta ipsam aperiam inventoredolorum sint sunt libero explicabo labore, nam qui, minima incidunt! Quod dolore corporis perspiciatis sequi recusandae atque fuga officia, iste adipisci veniamquia odio dolorum voluptatem asperiores doloribus quidem.",

    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    desc:
      "ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam in!Quibusdam quas dolore eaque asperiores nulla dicta ipsam aperiam inventoredolorum sint sunt libero explicabo labore, nam qui, minima incidunt! Quod dolore corporis perspiciatis sequi recusandae atque fuga officia, iste adipisci veniamquia odio dolorum voluptatem asperiores doloribus quidem.",

    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 4,
    headline: "Focus On The Writing",
    desc:
      "ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam in!Quibusdam quas dolore eaque asperiores nulla dicta ipsam aperiam inventoredolorum sint sunt libero explicabo labore, nam qui, minima incidunt! Quod dolore corporis perspiciatis sequi recusandae atque fuga officia, iste adipisci veniamquia odio dolorum voluptatem asperiores doloribus quidem.",

    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 5,
    headline: "Focus On The Writing",
    desc:
      "ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam in!Quibusdam quas dolore eaque asperiores nulla dicta ipsam aperiam inventoredolorum sint sunt libero explicabo labore, nam qui, minima incidunt! Quod dolore corporis perspiciatis sequi recusandae atque fuga officia, iste adipisci veniamquia odio dolorum voluptatem asperiores doloribus quidem.",

    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];
export default function ReviewSection() {
  const [current, setCurrent] = useState(1);

  console.log(current, 100 / slideData.length);
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slideData.length)}%)`,
  };
  console.log(wrapperTransform);
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slideData.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slideData.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <section className="dark-section py-5">
      <div className="heading-dark d-flex justify-content-center">รีวิว</div>
      <div className="review-slider">
        <ul className="review-slider-wrapper" style={wrapperTransform}>
          {slideData.map((slide) => {
            return (
              <ReviewCard
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
              />
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <a onClick={handlePreviousClick} className="review-previous mx-2">
          <i className="fas fa-arrow-left fa-lg" />
        </a>
        <a onClick={handleNextClick} className="review-next mx-2">
          <i className="fas fa-arrow-right fa-lg" />
        </a>
      </div>
    </section>
  );
}
