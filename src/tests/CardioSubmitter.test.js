import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardioSubmitter from '../components/CardioSubmitter';

it("renders without crashing", () => {
  shallow(<CardioSubmitter />);
});

it("renders the title text", () => {
  const wrapper = shallow(<CardioSubmitter />);
  const title = <h1>Add Cardio</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

// thanks to https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/