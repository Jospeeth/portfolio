import React from "react";

const navBarLinks = [
  { href: "#", title: "Home" },
  { href: "#About", title: "About" },
  { href: "#Projects", title: "Projects" },
  { href: "#Contact", title: "Contact" },
];

function NavLinks({href, title}) {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-primary"
    >
      {title}
    </a>
  );
}

export {NavLinks, navBarLinks};
