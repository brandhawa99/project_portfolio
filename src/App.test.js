import React from 'react';
import createRoot from 'react-dom';
import App from './App';
import {render, screen} from '@testing-library/react';

test('render the landing page', () => {
  render(<App/>)
});