/* eslint-disable no-unreachable */
import React from 'react';
import { useSelector } from 'react-redux';
import MyRocketsProfile from '../component/rockets-profile';
import MissionsProfile from '../component/missionProfile';

const Profile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);

  return (
    <>

      <div className="Profile-container">
        <div className="rockets-profile">
          <section className="my-rockets-sec">
            <h2> My Rockets </h2>
            <div className="box-border">
              {myReserveRockets.length > 0 ? myReserveRockets.map((rocket) => (
                <MyRocketsProfile
                  key={rocket.id}
                  rocketName={rocket.name}
                  reserved={!!rocket.reserved}
                  id={rocket.id}
                  URL={rocket.wikipedia}
                />

              )) : <p>You do not have any reserved rockets</p>}

            </div>
          </section>
        </div>
        <MissionsProfile />
      </div>
    </>
  );
};

export default Profile;
