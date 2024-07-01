import { useEffect, useState } from "react";
import { navBarLinks, NavLinks } from "./modules/NavLink";
import MenuOverlay from "./modules/MenuOverlay";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className=" fixed top-0 left-0 right-0 z-10  bg-gradient-to-r  from-purple-400/70 to-purple-500   bg-opacity-90 mx-auto">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="#" className="text-2xl md:text-5xl font-semibold">
          Jospeeth 
        </a>
        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transform transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90"
            onClick={() => setNavbarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          ) : (
            <button
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transform transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90"
            onClick={() => setNavbarOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navBarLinks.map((link, index) => {
              return (
                <NavLinks key={index} href={link.href} title={link.title} />
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navBarLinks} /> : null}
    </nav>
  );
}

export default NavBar;
