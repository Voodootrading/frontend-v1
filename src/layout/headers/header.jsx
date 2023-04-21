import Link from "next/link";
import React from "react";
import useSticky from "../../hooks/use-sticky";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";

const Header = () => {
  const { headerSticky } = useSticky();
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two tp-header-bs-area header-space-three
         ${headerSticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center header-space-one">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/voodoo.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="tp-main-menu text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-header-button text-end">
                  <Link href="/contact">
                    <a className="tp-btn">Let’s Talk 👋</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"voodoo.png"} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default Header;
