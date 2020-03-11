import { configure, mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
