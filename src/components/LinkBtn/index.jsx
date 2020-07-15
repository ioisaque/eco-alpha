import React from 'react';

export default function LinkBtn({ icon, color, title, link }) {
  return (
    <a href={link} className={`header-link mr-2 text-${color}`}>
      {icon && <i className="mIcon">{icon}</i>}
      {title}
    </a>
  );
}
