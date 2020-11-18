import React from 'react';
import { shallow, mount, render, } from 'enzyme';
import LiftSubmitter from '../components/LiftSubmitter';

it("renders without crashing", () => {
  shallow(<LiftSubmitter />);
});

it("renders the title text", () => {
  const wrapper = shallow(<LiftSubmitter />);
  const title = <h1>Add Lift</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

// thanks to https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/