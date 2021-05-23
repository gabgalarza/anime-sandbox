import React from 'react';

const NavListMenu = ({links}) => {
  return (
    <div id="NavListMenuDiv">
      <ul>
        {links.map((link, i) => {
          return (
            <a key={i} href="#id">
              <li>{link.name}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
 
export default NavListMenu;