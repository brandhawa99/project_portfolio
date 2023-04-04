import React from 'react';
import ReactDOM from 'react-dom';
import Tool from './Tool';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tool />, div);
  ReactDOM.unmountComponentAtNode(div);
});