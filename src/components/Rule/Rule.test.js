import React from 'react';
import ReactDOM from 'react-dom';
import Rule from './Rule';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rule />, div);
  ReactDOM.unmountComponentAtNode(div);
});