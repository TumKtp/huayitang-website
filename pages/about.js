import React from "react";

export default function about() {
  return (
    <main>
      <div
        id="aboutImageCarousel"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-mdb-target="#aboutImageCarousel"
            data-mdb-slide-to={0}
            className="active"
          />
          <li data-mdb-target="#aboutImageCarousel" data-mdb-slide-to={1} />
          <li data-mdb-target="#aboutImageCarousel" data-mdb-slide-to={2} />
          <li data-mdb-target="#aboutImageCarousel" data-mdb-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img src="/about-01.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src="/about-02.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src="/about-03.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src="/about-04.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="mask mask-custom" style={{ position: "absolute" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="frosted-card p-2">
              <h1 className="py-3 px-2 text-center">คลินิกฮัวอุยตึ๊ง</h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#aboutImageCarousel"
          role="button"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#aboutImageCarousel"
          role="button"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <section className="container py-5">
        <div className="heading d-flex justify-content-center">
          ประวัติคลินิก
        </div>
        <div className="row my-5">
          <div className=" col-md-12 col-lg-6  align-self-center order-lg-1 order-2 ">
            <p>
              ไฮเวย์อิกัวนาพะเรอ ฮิปฮอปอัลมอนด์โบรชัวร์ รีวิวแครอทสะเด่า
              สามช่าทอล์คนอมินี เซ็นทรัลวิปตี๋เกมส์
              เยอร์บีร่าบลอนด์บ๊อบสเปคฟอร์ม ไฟต์ไอซียูดิกชันนารี
              ชะโนดเคลียร์โปรโมชั่นม้งลาเต้ โมเต็ลมาร์กซาฟารีเช็ก
              แคนูมอบตัวก๋ากั่น แซวปาร์ตี้โอวัลตินไพลินรีวิว อยุติธรรม
              ฮิปฮอปวิลเลจรีพอร์ท ต่อยอดคอนเซ็ปต์เจลอิกัวนา ยิวทรูราเมน
              แคร์รามเทพ ปฏิสัมพันธ์ภารตะ ฟลุคไลฟ์ อุตสาหการฮัลโลวีน
              ซิ้มเทวาซูชิพรีเมียร์ บึ้มราสเบอร์รีออทิสติกเปโซวาซาบิ
              ทัวร์คอปเตอร์ เคอร์ฟิวเสกสรรค์อิเหนารวมมิตรสเปก
            </p>
          </div>
          <div className="col-md-12 col-lg-6 align-self-center hover-zoom order-lg-2 order-1 mb-5 m-lg-0">
            <img src="/about-05.svg" className="w-100" />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="heading d-flex justify-content-center">ผู้ก่อตั้ง</div>
        <div className="row my-5">
          <div className="col-md-12 col-lg-6 align-self-center hover-zoom mb-5 m-lg-0">
            <img src="/home-01.svg" className="w-100" />
          </div>
          <div className=" col-md-12 col-lg-6  align-self-center">
            <p>
              ไฮเวย์อิกัวนาพะเรอ ฮิปฮอปอัลมอนด์โบรชัวร์ รีวิวแครอทสะเด่า
              สามช่าทอล์คนอมินี เซ็นทรัลวิปตี๋เกมส์
              เยอร์บีร่าบลอนด์บ๊อบสเปคฟอร์ม ไฟต์ไอซียูดิกชันนารี
              ชะโนดเคลียร์โปรโมชั่นม้งลาเต้ โมเต็ลมาร์กซาฟารีเช็ก
              แคนูมอบตัวก๋ากั่น แซวปาร์ตี้โอวัลตินไพลินรีวิว อยุติธรรม
              ฮิปฮอปวิลเลจรีพอร์ท ต่อยอดคอนเซ็ปต์เจลอิกัวนา ยิวทรูราเมน
              แคร์รามเทพ ปฏิสัมพันธ์ภารตะ ฟลุคไลฟ์ อุตสาหการฮัลโลวีน
              ซิ้มเทวาซูชิพรีเมียร์ บึ้มราสเบอร์รีออทิสติกเปโซวาซาบิ
              ทัวร์คอปเตอร์ เคอร์ฟิวเสกสรรค์อิเหนารวมมิตรสเปก
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
