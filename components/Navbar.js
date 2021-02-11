import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="/logo.png"
              height="30"
              alt=""
              loading="lazy"
              className="me-2 logo"
            />
            ฮัวอุยตึ๊ง
          </a>
        </Link>
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
              <Link href="/">
                <a
                  className={
                    router.pathname == "/" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  หน้าแรก
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about" ? "nav-link active" : "nav-link"
                  }
                  href="#"
                >
                  เกี่ยวกับ
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link href="/services">
                <a
                  className={
                    router.pathname == "/sevices"
                      ? "nav-link dropdown-toggle active"
                      : "nav-link dropdown-toggle"
                  }
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  การรักษา
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/services/acupuncture">
                    <a className="dropdown-item" href="#">
                      ฝังเข็ม
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/cupping">
                    <a className="dropdown-item" href="#">
                      ครอบแก้ว
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/guasa">
                    <a className="dropdown-item" href="#">
                      กัวซา
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/diagnosis">
                    <a className="dropdown-item" href="#">
                      แมะ
                    </a>
                  </Link>
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
