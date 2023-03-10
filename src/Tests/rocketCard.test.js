import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketCard from '../component/rokets/rocketCard';

test('renders correctly', () => {
  const rocket = {
    id: 1,
    rocket_name: 'rocket 1',
    description: 'The Falcon 1 was an expendable launch system',
    flickr_images: 'img',
  };

  const { getByText } = render(
    <Provider store={store}>
      <RocketCard
        key={rocket.id}
        name={rocket.rocket_name}
        image={rocket.flickr_images}
        desc={rocket.description}
        reserved={!!rocket.reserved}
        id={rocket.id}
      />
    </Provider>,
  );

  expect(getByText(/Reserve/i)).toBeInTheDocument();
});
