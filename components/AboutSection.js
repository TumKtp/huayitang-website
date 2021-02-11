export default function AboutSection() {
  return (
    <section className="dark-section py-5">
      <div className="heading-dark d-flex justify-content-center mb-4">
        เกี่ยวกับ
      </div>
      <div className="row justify-content-center mx-1 mx-xl-5">
        {/* <img
          className=""
          src="/about-01.jpg"
        /> */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade col-12 col-md-5 col-xl-3 about-img "
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/about-01.jpg"
                className="d-block w-100 about-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/about-02.jpg"
                className="d-block w-100 about-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/about-03.jpg"
                className="d-block w-100 about-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/about-04.jpg"
                className="d-block w-100 about-img"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>

        <div className="col-12 col-md-6 col-xl-9 align-self-center mt-3 mt-s-0">
          <div className="about-title">
            ความเป็นมาของ<span>คลินิกฮัวอุยตึ๊ง</span>
          </div>
          <div className="about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quia
            nam dolore ipsa cumque eum commodi delectus qui, voluptates quasi
            dolor laudantium autem ipsam quas minima facilis modi adipisci ea.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          </div>
          <button type="button" className="btn btn-primary btn-about mt-4">
            เพิ่มเติม
          </button>
        </div>
      </div>
    </section>
  );
}
