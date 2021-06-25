import React from 'react';

import style from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autofocus
          placeholder="Search photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
