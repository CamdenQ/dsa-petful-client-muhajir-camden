import React from 'react';
import Pets from '../Pets/Pets';
import UserQueue from '../UserQueue/UserQueue';

export default function AdoptionPage(props) {
  return (
      <main>
        <Pets showAdopt={props.showAdopt}/>
        <UserQueue queue={props.queue}/>
      </main>
  );
}
