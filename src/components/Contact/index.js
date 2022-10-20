import React from 'react';

function Contact() {

  function thankYou() {
    alert('Thank you for you message!')
  }

  return (
    <section className="my-5 w-100">
      <h1 id="about">Contact</h1>
      <div className="my-2 w-100">
        <form>
          <h2>Name</h2>
          <input type='text'></input>
          <h2>Email</h2>
          <input type='text'></input>
          <h2>Message</h2>
          <input type='text' className='w-75 h-75'></input>
          <button onClick={thankYou}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
