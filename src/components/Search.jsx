import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const mainTitleText = '¿Que quieres ver hoy?';
const mainInputPlaceholder = 'Buscar';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome
  })
  return (
    <section className="main">
      <h2 className="main__title">{mainTitleText}</h2>
      <input type="text" className={inputStyle} placeholder={mainInputPlaceholder} />
    </section>
  );
}
 

export default Search;

