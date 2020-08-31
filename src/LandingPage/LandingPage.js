import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ApiService from '../api-service';
import './LandingPage.css';

export default function LandingPage(props) {
  const [state, setState] = useState({
    input: '',
  });

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    props.setUser(state.input);
    ApiService.joinQueue({ name: state.input });
    history.push('/pets');
  }

  return (
    <main className="landing-page-main">
      <div className="overlay">
        <section className="landing-page-section">
          <h1 className="landing-page-title">Petful Adoption Agency</h1>
          <p className="landing-page-body">
            Welcome to the Petful Adoption Agency!
          </p>
          <p className="landing-page-body">
            We also operate on a strict first come/first serve basis for both
            pets and adopters. You must wait your turn to adopt a cat or dog,
            and may only adopt the cat or dog that has been with us the longest.
          </p>
          <p className="landing-page-body">
            To get started, simply enter your name below to be added to the list
            and taken the adoption page where you can see the current cat and
            dog available for adoption.
          </p>
          <p className="landing-page-body">
            However, be aware that the selection will change as the pets are
            adopted by those ahead of you on the list.
          </p>
          <form
            className="landing-page-form"
            aria-label="Adoption list form"
            onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => setState({ input: e.target.value })}
              type="text"
              aria-label="Adopter name"
              value={state.input}
              placeholder="Your name here"
              required
              autoFocus></input>
            <button type="submit">Get Started</button>
          </form>
        </section>
      </div>
    </main>
  );
}
