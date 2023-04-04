import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
  ReactDOM.unmountComponentAtNode(div);
});