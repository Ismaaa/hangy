import React from 'react';

const ABECEDARY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Abecedary = () => (
  <div className="Abecedary">
    {ABECEDARY.split('').map((character) => (
      <span className="Abecedary__character">{character}</span>
    ))}
  </div>
);

export default Abecedary;
