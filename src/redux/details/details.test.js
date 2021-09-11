import detailsReducer, { clearData, addData } from './details';

const payload = [
  {
    profileData: {
      symbol: "AAPL",
      price: 113.02,
      beta: 1.34434,
      volAvg: 172070917,
      mktCap: 1932924420000,
      lastDiv: 0.7825,
      range: "53.1525-137.98",
      changes: -3.77,
      companyName: "Apple Inc",
    },
    chartData: [
      {
        date: "2021-09-10 11:00:00",
        close: 154.31,
      },
      {
        date: "2021-09-10 10:30:00",
        close: 154.35,
      },
      {
        date: "2021-09-10 10:00:00",
        close: 154.78,
      },
      {
        date: "2021-09-10 09:30:00",
        close: 155.35,
      },
      {
        date: "2021-09-09 16:00:00",
        close: 154.49,
      },
      {
        date: "2021-09-09 15:30:00",
        close: 154.12,
      },
      {
        date: "2021-09-09 15:00:00",
        close: 154.28,
      },
    ]
  },
];

const currentState = payload


describe('detailstReducer', () => {
  it('returns the default state [] when called with no action', () => {
    expect(detailsReducer(undefined, {})).toEqual({});
  });

  it('return a state equal to the payload', () => {
    expect(detailsReducer([], addData(payload))).toEqual(payload);
  });

  it('clear state data', () => {
    expect(
      detailsReducer(currentState, clearData()),
    ).toEqual({});
  });

});