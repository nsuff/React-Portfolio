import React from 'react';
import RouteTest from '../../assets/routetest.png';
import ReadGen from '../../assets/readmegenerator.png';
import Smartpot from '../../assets/smartpot.png';
import Workday from '../../assets/workday.png';
import Weather from '../../assets/weather.png';
import SharkQuiz from '../../assets/sharkquiz.png';

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="about">Portfolio</h1>
      <div className="my-2 container-fluid border-top border-info">
        <div className="row">
          <div className='col-lg-6'>
            <p>
              Mongo Routes
            </p>
            <a href='https://github.com/nsuff/Social-Network-API.git'>
              <p>
                Github Link
              </p>
            </a>
            <img
            src={RouteTest}
            alt={'Profile'}
            className="profilepicture mx-1 w-50 row"
            />
          </div>
          <div className='col-lg-6'>
            <p>
              Readme Generator
            </p>
            <a href='https://github.com/nsuff/README_Generator.git'>
              Github Link
            </a>
            <img
            src={ReadGen}
            alt={'Readme'}
            className="profilepicture mx-1 w-50 row"
            />
          </div>
        </div>
        <div className="row my-5">
        <div className='col-lg-6'>
            <p>
              Potluck Application
            </p>
            <a href='https://smarterpotluck.herokuapp.com/' className='row my-0 mx-0'>
              Deployed Link
            </a>
            <a href='https://github.com/nsuff/project2-smartpot.git'>
              Github Link
            </a>
            <img
            src={Smartpot}
            alt={'Smartpot'}
            className="profilepicture mx-1 w-50 row"
            />
          </div>
          <div className='col-lg-6'>
            <p>
              Weather Application
            </p>
            <a href='https://nsuff.github.io/suns-bedtime-nins/' className='row my-0 mx-0'>
              Deployed Link
            </a>
            <a href='https://github.com/nsuff/suns-bedtime-nins.git'>
              Github Link
            </a>
            <img
            src={Weather}
            alt={'Weather'}
            className="profilepicture mx-1 w-50 row"
            />
          </div>
        </div>
        <div className="row">
        <div className='col-lg-6'>
            <p>
              Work Day Scheduler
            </p>
            <a href='https://nsuff.github.io/Module-5-Challenge/' className='row my-0 mx-0'>
              Deployed Link
            </a>
            <a href='https://github.com/nsuff/Module-5-Challenge.git'>
              Github Link
            </a>
            <img
            src={Workday}
            alt={'Work Day'}
            className="profilepicture mx-1 w-50 row"
            />
          </div>
          <div className='col-lg-6'>
            <p>
              Quiz
            </p>
            <a href='https://nsuff.github.io/Module-4-Challenge/' className='row my-0 mx-0'>
              Deployed Link
            </a>
            <a href='https://github.com/nsuff/Module-4-Challenge.git'>
              Github Link
            </a>
            <img
            src={SharkQuiz}
            alt={'Quiz'}
            className="profilepicture mx-1 w-50 row"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
