import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from '../redux/rockets/Api';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(fetchRockets())
    },[]);
    const newRockets = rockets.data;
    const cards = newRockets.length > 0 && newRockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        id={rocket.id}
        name={rocket.name}
        image={rocket.image}
        desc={rocket.desc}
        reserved={rocket.reserved}
      />
    ));
  return(
    <div className="rocket-container">
    {cards}
  </div>
  );
};

export default Rockets;
