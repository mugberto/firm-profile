import React from 'react';
import { render, screen } from '../test-utils';
import DetailsPage from './DetailsPage';

jest.mock('react-router-dom', () => ({
  useParams: () => ({ symbol: 'AAPL' }),
}));

describe('DetailsPage', () => {
  it('renders page correctly', () => {
    const tree = render(<DetailsPage />);
    expect(tree).toMatchSnapshot();
  });

  it('updates the UI with loaded data is loaded', async () => {
    render(<DetailsPage />);
    expect(await screen.findByText('STOCK CHART')).toBeInTheDocument();
  });
});
