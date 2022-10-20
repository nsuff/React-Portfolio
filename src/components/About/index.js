import React from 'react';
import ProfilePic from '../../assets/profilepicture.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <p>
          I am currently in the Bootcamp, attempting not to drop out in the final few weeks.
          The image below is exactly what I look like.
        </p>
        <img
          src={ProfilePic}
          alt={'Profile'}
          className="profilepicture mx-1"
        />
      </div>
    </section>
  );
}

export default About;
