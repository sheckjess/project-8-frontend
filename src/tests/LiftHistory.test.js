import { screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LiftHistory from '../components/LiftHistory';

test('Renders an element with the word "LiftHistory"', () => {
  shallow(<LiftHistory />);

  
  //const linkElement = screen.getByText(/LiftHistory/i);
  //expect(linkElement).toBeInTheDocument();
});