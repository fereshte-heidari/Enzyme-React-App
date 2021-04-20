import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import enzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new enzymeAdapter() });
test("renders learn react link", () => {
  const wrapper = shallow(<App />);
});
