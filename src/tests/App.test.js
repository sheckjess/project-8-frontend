import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

it("renders without crashing", () => {
  shallow(<App />);
  
});

// thanks to https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/