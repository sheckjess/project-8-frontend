import { screen } from '@testing-library/react';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

test('renders learn react link', () => {
  shallow(<App />);

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
