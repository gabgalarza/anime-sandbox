import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App/>);
  });

  describe("when App renders", () => {
    it("renders without crashing", () => {
      expect(wrapper.length).toBe(1);
    });
  });

  describe("when App mounts", () => {
    it("should call useEffect", () => {});
  });

});
