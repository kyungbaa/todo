import React from 'react';
import styles from './Header.module.css';
const Header = ({ filter, filters, onFilterChange }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={(e) => onFilterChange(value)}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
