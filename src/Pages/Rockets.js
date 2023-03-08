/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import RocketCard from '../component/rokets/rocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.rocketsData.length === 0) {
      dispatch(getRockets());
    }
  }, []);
  const newRockets = rockets.rocketsData;

  const cards = newRockets.length > 0 && newRockets.map((rocket) => (
    <RocketCard
      key={rocket.id}
      id={rocket.id}
      name={rocket.name}
      image={rocket.image}
      desc={rocket.desc}
      reserved={rocket.reserved}
    />
  ));

  return (
    <div className="rocket-container">
      {cards}
    </div>
  );
};

export default Rockets;
