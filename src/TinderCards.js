import React, { useState, useEffect } from 'react'
import database from './firebase';
import './Tinder.css';

// Lib
import TinderCard from 'react-tinder-card'

const TinderCards = () => {

  const [people, setPeople] = useState([
    // {
    //   name: 'steve',
    //   url: ''
    // },
    // {
    //   name: 'mark',
    //   url: ''
    // },
  ]);

  useEffect(() => {

    const unsubscribe = database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ))

    return () => {
      // clean up
      unsubscribe();
    }

  }, [people])

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {
          people.map((person, key) => (
            <TinderCard
              key={key}
              className="swipe"
              // onSwipe={onSwipe} 
              // onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
              preventSwipe={['up', 'down']}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${person.url})`
                }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}

export default TinderCards
