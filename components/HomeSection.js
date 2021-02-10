export default function HomeSection() {
  return (
    <section className="container home-section">
      <div className="row my-5">
        <div className=" col-md-12 col-lg-6 col-xl-5  align-self-center order-lg-1 order-2 ">
          <h1>
            รักษาด้วยแพทย์ที่เชี่ยวชาญ
            <br />
            ประสบการณ์กว่า 50 ปี
          </h1>
          <h4 className="text-muted mt-4">
            ใส่ใจ และรักษาผู้ป่วยดั่งคนในครอบครัว
          </h4>
          <button type="button" className="btn btn-primary btn-home mt-4">
            การรักษา
          </button>
        </div>
        <div className="col-md-12 col-lg-6  col-xl-7 align-self-center  bg-image hover-zoom order-lg-2 order-1 ">
          <img src="/home1.png" className="w-100" />
        </div>
      </div>
    </section>
  );
}
