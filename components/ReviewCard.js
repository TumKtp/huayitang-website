import React from "react";

export default function ReviewCard({ current, handleSlideClick, slide }) {
  const { src, headline, index, desc } = slide;
  const slideClick = () => {
    handleSlideClick(slide.index);
  };

  let classNames = "review-slide";
  if (current === index) classNames += " review-slide-current";
  else if (current >= index) classNames += " review-slide-previous";
  else if (current <= index) classNames += " review-slide-next";

  return (
    <div className={classNames}>
      <div
        className="card m-3"
        style={{ width: "19rem", height: "450px" }}
        onClick={slideClick}
      >
        <img
          className="card-img-top review-slide-img"
          alt={headline}
          src={src}
        />
        <div className="card-body">
          <h5 className="card-title">{headline}</h5>
          <p className="card-text">{desc.slice(0, 150) + "..."}</p>
          <div className="clip-star"></div>
          <div className="clip-star"></div>
          <div className="clip-star"></div>
          <div className="clip-star"></div>
          <div className="clip-star"></div>
        </div>
      </div>
    </div>
  );
}
