import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../Pages/ROCKETS';

it('renders correctly', () => {
  const Rocket = renderer
    .create(
      <Provider store={store}><Rockets /></Provider>,
    )
    .toJSON();
  expect(Rocket).toMatchSnapshot();
});
