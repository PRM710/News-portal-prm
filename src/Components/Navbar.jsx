import React, { useState } from 'react';

const Navbar = ({ setCategory, setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchQuery(''); // Clear search query when category is selected
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchInput);
    setCategory(''); // Clear category when performing a search
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News-Portal</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-bs-theme="dark"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleCategoryClick('technology')}
                aria-current="page"
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick('business')}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick('science')}>
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick('health')}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick('sports')}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick('entertainment')}>
                Entertainment
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
