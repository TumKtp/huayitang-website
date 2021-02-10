import ServiceCard from "../components/ServiceCard";

const allServices = [
  {
    title: "ฝังเข็ม",
    imgUrl: "https://mdbootstrap.com/img/new/standard/city/044.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: "200-300",
  },
  {
    title: "ฝังเข็ม",
    imgUrl: "https://mdbootstrap.com/img/new/standard/city/044.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

    price: "200-300",
  },
  {
    title: "ฝังเข็ม",
    imgUrl: "https://mdbootstrap.com/img/new/standard/city/044.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

    price: "200-300",
  },
  {
    title: "ฝังเข็ม",
    imgUrl: "https://mdbootstrap.com/img/new/standard/city/044.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    price: "200-300",
  },
  {
    title: "ฝังเข็ม",
    imgUrl: "https://mdbootstrap.com/img/new/standard/city/044.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

    price: "200-300",
  },
  {
    title: "ฝังเข็ม",
    imgUrl: "https://mdbootstrap.com/img/new/standard/city/044.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

    price: "200-300",
  },
];
export default function ServicesSection() {
  return (
    <section className="container py-5">
      <div className="heading d-flex justify-content-center">การรักษา</div>
      <div className="row justify-content-between">
        {allServices.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </section>
  );
}
