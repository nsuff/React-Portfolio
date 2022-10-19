import React, { useState } from 'react';
import Nav from './components/Nav';


function App() {

  const [categories] = useState([
    {
      name: 'smartpot',
      description: 'Potluck planning application'
    },
    {
      name: 'mongoroutes',
      description: 'Routes using Mongo'
    },
    {
      name: 'weather',
      description: 'Application that displays the weather over a five day forcast'
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        resumeSelected={resumeSelected}
        aboutSelected={aboutSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
    </div>
  );
}

export default App;
