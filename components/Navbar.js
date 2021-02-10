export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="#">
          <img
            src="/logo.png"
            height="30"
            alt=""
            loading="lazy"
            className="me-2"
          />
          ฮัวอุยตึ๊ง
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                หน้าแรก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                เกี่ยวกับ
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                การรักษา
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    ฝังเข็ม
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ครอบแก้ว
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ยาจีน
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="ข้อความ..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              data-mdb-ripple-color="dark"
            >
              ค้นหา
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
