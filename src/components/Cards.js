import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Advertisements!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Find your ideal hotel for the best price '
              label='Hotels'
              path='/hotel'
            />
            <CardItem
              src='images/img-12.png'
              text="The future is electronic. It's radio, television and the internet. It's not really newspapers anymore"
              label='Electronics'
              path='/electronic'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpeg'
              text='We serve passion'
              label='Restaurants and bars'
              path='/restaurant'
            />
            <CardItem
              src='images/img-10.jpg'
              text="We're hiring !!"
              label='Jobs'
              path='/jobs'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iv_i93JlEVyIrDA2NjDzjLZ2R_aebPRCHg&usqp=CAU'
              text='Life is too short to wear boaring clothes!!'
              label='Clothing'
              path='/clothing'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
