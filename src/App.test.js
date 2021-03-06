import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import enzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new enzymeAdapter() });
test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");

  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {});

test("clicking button increments counter display", () => {});
