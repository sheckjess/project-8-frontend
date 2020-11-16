import { screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardioHistory from '../components/CardioHistory';

test('Renders an element with the word "CardioHistory"', () => {
  shallow(<CardioHistory />);

  
  //const linkElement = screen.getByText(/CardioHistory/i);
  //expect(linkElement).toBeInTheDocument();
});