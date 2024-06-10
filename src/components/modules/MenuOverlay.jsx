import React from 'react';
import { NavLinks } from "./NavLink";

function MenuOverlay({ links }) {
  return (
    <div className='absolute flex bg-background transition-all ease-in-out duration-300 p-6 top-15 right-0 mx-4 my-2 min-w-[120px] z-20 rounded-xl border-2 border-[#7341fa]'>
        <ul>
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default MenuOverlay;
