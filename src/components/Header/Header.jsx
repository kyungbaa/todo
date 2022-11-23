import React from 'react';

const Header = ({ filter, filters, onFilterChange }) => {
  return (
    <header>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>
            <button onClick={(e) => onFilterChange(filter)}>{filter}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
