import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LiftHistory from '../components/LiftHistory';
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

it("renders without crashing", () => {
  shallow(<LiftHistory />);
});

it("renders the title text", () => {
  const wrapper = shallow(<LiftHistory />);
  const title = <h1>Your Previous Lifts</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it("renders a back button", () => {
  const wrapper = shallow(<LiftHistory />);
  const backButton = (
    <Link href="/lifting">
      <Button
        style={{ margin: "5px", backgroundColor: "black" }}
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </Link>
  );
  expect(wrapper.contains(backButton)).toEqual(true);
});

// thanks to https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/

//Your Previous Lifts