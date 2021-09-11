import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '../test-utils';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders page correctly', () => {
    const tree = render(<HomePage />);
    expect(tree).toMatchSnapshot();
  });

  it('updates the UI with loaded data is loaded', async () => {
    render(<Router><HomePage /></Router>);
    expect(await screen.findByText('PROFILE')).toBeInTheDocument();
    expect(await screen.findByText('Comcast Corporation')).toBeInTheDocument();
  });
});
