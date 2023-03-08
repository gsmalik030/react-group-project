/* eslint linebreak-style: ["error", "windows"] */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, toggleMissionReservation } from '../redux/missionsReducer';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.reserved);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch, missions]);
  return (
    <div className="missions-profile">
      <h2>My Missions</h2>
      <div className="box-border">
        { missions.length === 0 && <p>You have no reserved missions</p>}
        {missions.map((mission) => (
          <div className="my-missions" key={mission.mission_id}>
            <ul>
              <li>
                <p key={mission.mission_id} className="reserve-item">{mission.mission_name}</p>
                <button
                  type="button"
                  className={`${mission.reserved ? 'cancel' : 'reserve'}`}
                  onClick={() => dispatch(toggleMissionReservation(mission.mission_id))}
                >
                  {mission.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
                </button>
                <a href={mission.wikipedia}>Read more</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionProfile;
