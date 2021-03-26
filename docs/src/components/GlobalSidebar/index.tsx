import { Accordion } from '@lubycon/ui-kit';
import React from 'react';
import { menu } from 'constants/menu';

const GlobalSidebar = () => {
  return (
    <aside>
      {menu.map((item, index) => (
        <Accordion key={index} label={item.title} />
      ))}
    </aside>
  );
};

export default GlobalSidebar;
