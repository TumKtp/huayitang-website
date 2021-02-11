import React from "react";

export default function ContactSection() {
  return (
    <section className="container py-5">
      <div className="heading d-flex justify-content-center">ติดต่อเรา</div>
      <div className="row my-5">
        <div className=" col-md-12 col-lg-6  align-self-center order-lg-1 order-2 ">
          <form className="row g-3">
            <div className="col-md-5">
              <label htmlFor="fullName" className="form-label">
                ชื่อ
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                required
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="phoneNum" className="form-label">
                เบอร์ติดต่อ
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNum"
                required
              />
            </div>
            <div className="col-md-10">
              <label htmlFor="Heading" className="form-label">
                หัวข้อ
              </label>
              <input
                type="text"
                className="form-control"
                id="Heading"
                required
              />
            </div>
            <div className="col-md-10">
              <label htmlFor="phoneNum" className="form-label">
                ข้อความ
              </label>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  เข้าใจ และยอบรับเงื่อนไข
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-12 col-lg-6 align-self-center hover-zoom order-lg-2 order-1 mb-5 m-lg-0">
          <img src="/home-contact-01.svg" className="w-100" />
        </div>
      </div>
    </section>
  );
}
