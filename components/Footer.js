import React from "react";

export default function Footer() {
  return (
    <footer className="footer-bg text-white text-center text-lg-start">
      {/* Grid container */}
      <div className="container pb-0 pb-md-3 pt-5">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className=" col-lg-6 col-md-12 mb-4 mb-md-0 ">
            <div className="d-flex flex-column  text-center">
              <div>
                <img
                  src="/logo.png"
                  height="100"
                  alt=""
                  loading="lazy"
                  className="logo "
                />
              </div>
              <div className="text-uppercase mt-4 mt-md-2">
                <h4>คลินิกฮัวอุยตึ๊ง</h4>
                <p className="small">Huayitang Clinic</p>
              </div>
              <p>
                <i className="fas fa-map-marker-alt me-2" />
                111 ซอย วัดปรก 1 แขวง ทุ่งวัดดอน เขตสาทร
                <br /> กรุงเทพมหานคร 10120
              </p>
            </div>

            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p> */}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">ช่องทางการติดต่อ</h5>
            <ul className="list-unstyled mb-0 ">
              <li>
                <a
                  className="btn btn-primary mt-2"
                  style={{ backgroundColor: "#00DB11", width: "70px" }}
                  href="#!"
                  role="button"
                >
                  Line
                </a>
                <a href="#!" className="text-white ms-2">
                  @huayitang
                </a>
              </li>
              <li>
                <a
                  className="btn btn-primary mt-2"
                  style={{ backgroundColor: "#3b5998", width: "70px" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#!" className="text-white ms-2">
                  Huayitang Clinic
                </a>
              </li>
              <li>
                <a
                  className="btn btn-primary mt-2"
                  style={{ backgroundColor: "#000000", width: "70px" }}
                  href="#!"
                  role="button"
                >
                  <i className="fas fa-phone-alt fa-lg"></i>
                </a>
                <a href="#!" className="text-white ms-2">
                  022222222
                </a>
              </li>

              <li>
                <a
                  className="btn btn-primary mt-2"
                  style={{ backgroundColor: "#ac2bac", width: "70px" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#!" className="text-white ms-2">
                  Coming Soon!
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">วันที่เปิดทำการ</h5>
            <ul className="list-unstyled mt-2">
              <li>
                <a href="#!" className="text-white ms-2">
                  วันอังคาร 10:00-19:00
                </a>
              </li>
              <li>
                <a href="#!" className="text-white ms-2">
                  วันพฤหัสบดี 15:00-19:00
                </a>
              </li>
              <li>
                <a href="#!" className="text-white ms-2">
                  วันเสาร์ 10:00-19:00
                </a>
              </li>
              <button type="button" className="btn btn-about m-2">
                จองคิว
              </button>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Huayitangclinic.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
