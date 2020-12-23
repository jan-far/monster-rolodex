import React from 'react';
import './cardList.styles.css';
import Card from '../Cards'

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};

export default CardList;
