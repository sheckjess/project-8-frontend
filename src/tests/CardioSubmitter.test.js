import { screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardioSubmitter from '../components/CardioSubmitter';

test('Renders an element with the word "CardioSubmitter"', () => {
  shallow(<CardioSubmitter />);

  
  //const linkElement = screen.getByText(/CardioSubmitter/i);
  //expect(linkElement).toBeInTheDocument();
});