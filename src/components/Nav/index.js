import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    aboutSelected,
    resumeSelected,
    currentCategory,
    setContactSelected,
    setAboutSelected,
    setResumeSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(true);
              setResumeSelected(false);
              setContactSelected(false);
              }}>About Me</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {
              setResumeSelected(true);
              setAboutSelected(false);
              setContactSelected(false);
              }}>Resume</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {
              setContactSelected(true);
              setAboutSelected(false);
              setResumeSelected(false);
              }}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
