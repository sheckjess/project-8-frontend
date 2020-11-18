import React from "react";
import { shallow, mount, render } from "enzyme";
import CardioHistory from "../components/CardioHistory";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

it("renders without crashing", () => {
  shallow(<CardioHistory />);
});

it("renders the title text", () => {
  const wrapper = shallow(<CardioHistory />);
  const title = <h1>Your Previous Cardio Workouts</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it("renders a back button", () => {
  const wrapper = shallow(<CardioHistory />);
  const backButton = (
    <Link href="/cardio">
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
