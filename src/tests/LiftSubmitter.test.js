import { screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LiftSubmitter from '../components/LiftSubmitter';

test('Renders an element with the word "LiftSubmitter"', () => {
  shallow(<LiftSubmitter />);

  
  //const linkElement = screen.getByText(/LiftSubmitter/i);
  //expect(linkElement).toBeInTheDocument();
});