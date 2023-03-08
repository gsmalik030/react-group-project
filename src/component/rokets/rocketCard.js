import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';

const RocketCard = ({
  id, name, image, reserved, desc,
}) => {
  const dispatch = useDispatch();

  const handleReservation = (id) => (
    dispatch(reserveRocket(id))
  );

  return (
    <div className="rocket">
      <img className="rocket-image" src={image} alt={name} />
      <div className="rocket-desc">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-info">
          {reserved && <small className="reserved-badge">Reserved</small>}
          {desc}
        </p>
        <button type="button" className={`${reserved ? 'cancel' : 'reserve'}`} onClick={() => handleReservation(id)}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket' }</button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  reserved: PropTypes.bool,
};

RocketCard.defaultProps = {
  reserved: false,
  id: null,
  name: null,
  image: null,
  desc: null,
};

export default RocketCard;
