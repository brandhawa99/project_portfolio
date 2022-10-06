import React from 'react';
import ReactDOM from 'react-dom';
import Tip from './Tip';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tip />, div);
  ReactDOM.unmountComponentAtNode(div);
});