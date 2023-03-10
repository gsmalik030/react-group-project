import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../Pages/MISSIONS';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const Mission = renderer
    .create(
      <Provider store={store}><Missions /></Provider>,
    )
    .toJSON();
  expect(Mission).toMatchSnapshot();
});
