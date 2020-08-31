import React from 'react';
import Pets from '../Pets/Pets';
import UserQueue from '../UserQueue/UserQueue';
import './AdoptionPage.css';

export default function AdoptionPage(props) {
  return (
    <main className="adoption-main">
      <UserQueue queue={props.queue} showAdopt={props.showAdopt} />
      <Pets showAdopt={props.showAdopt} />
    </main>
  );
}
