import React from 'react';
import ReactDOM from 'react-dom';
import HeaderText from './HeaderText';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderText />, div);
  ReactDOM.unmountComponentAtNode(div);
});