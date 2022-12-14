import React from 'react';


function Nav(props) {
  const {
    contactSelected,
    aboutSelected,
    resumeSelected,
    portfolioSelected,
    setPortfolioSelected,
    setContactSelected,
    setAboutSelected,
    setResumeSelected
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/" className='text-danger'>
          Nino Suffoletta
        </a>
      </h2>
      <nav className='w-100 border-bottom border-info'>
        <ul className="flex-row text-primary">
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => {
              setPortfolioSelected(true);
              setAboutSelected(false);
              setResumeSelected(false);
              setContactSelected(false);
              }}>Portfolio</span>
          </li>
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(true);
              setPortfolioSelected(false);
              setResumeSelected(false);
              setContactSelected(false);
              }}>About Me</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {
              setResumeSelected(true);
              setPortfolioSelected(false);
              setAboutSelected(false);
              setContactSelected(false);
              }}>Resume</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {
              setContactSelected(true);
              setPortfolioSelected(false);
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
