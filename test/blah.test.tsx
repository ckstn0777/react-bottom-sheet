import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactButtonSheet } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactButtonSheet text="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
