import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

function MyRocketsProfile({
  id, rocketName, reserved, URL,
}) {
  const dispatch = useDispatch();
  return (
    <div className="my-rockets">
      <ul>
        <li>
          {rocketName}
          <button
            type="button"
            className={`${reserved ? 'cancel' : 'reserve'}`}
            onClick={() => dispatch(reserveRocket(id))}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve '}
          </button>
          <a href={URL}>Read more</a>
        </li>
      </ul>
    </div>

  );
}

MyRocketsProfile.propTypes = {
  rocketName: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default MyRocketsProfile;
