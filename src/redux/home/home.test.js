import homeReducer, { addData } from './home';

const payload = [{
  symbol: 'SPY',
  name: 'SPDR S&P 500 ETF Trust',
  price: 451.46,
  exchange: 'New York Stock Exchange Arca',
}, {
  symbol: 'CMCSA',
  name: 'Comcast Corporation',
  price: 60.3,
  exchange: 'Nasdaq Global Select',
}];

const currentState = payload;

describe('homeReducer', () => {
  it('returns the default state [] when called with no action', () => {
    expect(homeReducer(undefined, {})).toEqual([]);
  });

  it('return a state equal to the payload', () => {
    expect(homeReducer([], addData(payload))).toEqual(currentState);
  });
});
