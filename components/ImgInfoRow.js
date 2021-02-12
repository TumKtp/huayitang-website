import React from "react";

export default function ImgInfoRow({ titleText, descText, imgPath, textList }) {
  return (
    <section className="row mt-5">
      <div className="col-md-12 col-lg-6 align-self-center mb-5 m-lg-0">
        <img src={imgPath} className="w-100" />
      </div>
      <div className="col-md-12 col-lg-6  align-self-center ">
        <h4>{titleText}</h4>
        <p>{descText}</p>
        <ul>{textList && textList.map((message) => <li>{message}</li>)}</ul>
      </div>
    </section>
  );
}
