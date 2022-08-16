import React from 'react';
import ReactDOM from 'react-dom';
import FirstSection from './FirstSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});