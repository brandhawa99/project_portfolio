import React from 'react';
import ReactDOM from 'react-dom';
import Tools from './Tools';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tools />, div);
  ReactDOM.unmountComponentAtNode(div);
});