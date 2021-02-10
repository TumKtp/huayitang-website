export default function ServiceCard({ service }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 p-lg-3 service-card">
      <div className="card h-100">
        <img
          src={service.imgUrl}
          className="card-img-top"
          alt={service.title}
        />
        <div className="card-body">
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{service.price}</small>
        </div>
      </div>
    </div>
  );
}
