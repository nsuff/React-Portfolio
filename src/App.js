import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {

  // const [categories] = useState([
  //   {
  //     name: 'smartpot',
  //     description: 'Potluck planning application'
  //   },
  //   {
  //     name: 'mongoroutes',
  //     description: 'Routes using Mongo'
  //   },
  //   {
  //     name: 'weather',
  //     description: 'Application that displays the weather over a five day forcast'
  //   }
  // ])

  //const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
        //categories={categories}
        //setCurrentCategory={setCurrentCategory}
        //currentCategory={currentCategory}
        contactSelected={contactSelected}
        resumeSelected={resumeSelected}
        aboutSelected={aboutSelected}
        portfolioSelected={portfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main>
        {aboutSelected ? (
          <About></About>
        ) : (<></>) }
        {portfolioSelected ? (
          <Portfolio></Portfolio>
        ) : (<></>) }
        {resumeSelected ? (
          <Resume></Resume>
        ) : (<></>) }
        {contactSelected ? (
          <Contact></Contact>
        ) : (<></>) }
      </main>
    </div>
  );
}

export default App;
