// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Enzyme testing setup.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import ReactGA from 'react-ga';
import sinon from 'sinon';


// assign to global for adding tests
// global.ReactGAStub = sinon.stub(ReactGA, 'pageview');

configure({ adapter: new Adapter() });
