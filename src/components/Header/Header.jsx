import React from 'react';
import styles from './Header.module.css';
const Header = ({ filter, filters, onFilterChange }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              onClick={(e) => onFilterChange(filter)}
              className={styles.filter}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
