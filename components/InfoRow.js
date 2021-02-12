import React from "react";

export default function InfoRow({ titleText, descText, textList }) {
  return (
    <section className="row mt-5">
      <div className="col-md-12 align-self-center ">
        <h4>{titleText}</h4>
        <p>{descText}</p>
        <ul>{textList && textList.map((message) => <li>{message}</li>)}</ul>
      </div>
    </section>
  );
}
