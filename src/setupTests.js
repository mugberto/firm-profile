import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

const handlers = [
  rest.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=78f718bb1f98542c7f205b7a95b64c04', (req, res, ctx) => res(ctx.json(
    [{
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF Trust',
      price: 451.46,
      exchange: 'New York Stock Exchange Arca',
    }, {
      symbol: 'CMCSA',
      name: 'Comcast Corporation',
      price: 60.3,
      exchange: 'Nasdaq Global Select',
    }, {
      symbol: 'KMI',
      name: 'Kinder Morgan, Inc.',
      price: 16.16,
      exchange: 'New York Stock Exchange',
    }, {
      symbol: 'INTC',
      name: 'Intel Corporation',
      price: 53.65,
      exchange: 'Nasdaq Global Select',
    }, {
      symbol: 'MU',
      name: 'Micron Technology, Inc.',
      price: 73.64,
      exchange: 'Nasdaq Global Select',
    }, {
      symbol: 'GDX',
      name: 'VanEck Vectors Gold Miners ETF',
      price: 32.35,
      exchange: 'New York Stock Exchange Arca',
    }, {
      symbol: 'GE',
      name: 'General Electric Company',
      price: 103.29,
      exchange: 'New York Stock Exchange',
    }, {
      symbol: 'BAC',
      name: 'Bank of America Corporation',
      price: 41.32,
      exchange: 'New York Stock Exchange',
    }, {
      symbol: 'EEM',
      name: 'iShares MSCI Emerging Markets ETF',
      price: 53.43,
      exchange: 'New York Stock Exchange Arca',
    }, {
      symbol: 'XLF',
      name: 'Financial Select Sector SPDR Fund',
      price: 37.84,
      exchange: 'New York Stock Exchange Arca',
    }, {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 156.69,
      exchange: 'Nasdaq Global Select',
    }, {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 300.18,
      exchange: 'Nasdaq Global Select',
    }, {
      symbol: 'SIRI',
      name: 'Sirius XM Holdings Inc.',
      price: 6.16,
      exchange: 'Nasdaq Global Select',
    }, {
      symbol: 'HPQ',
      name: 'HP Inc.',
      price: 28.65,
      exchange: 'New York Stock Exchange',
    }],
  ), ctx.delay(150))),
  rest.get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=78f718bb1f98542c7f205b7a95b64c04', (req, res, ctx) => res(ctx.json([{
    symbol: 'AAPL',
    price: 113.02,
    beta: 1.34434,
    volAvg: 172070917,
    mktCap: 1932924420000,
    lastDiv: 0.7825,
    range: '53.1525-137.98',
    changes: -3.77,
    companyName: 'Apple Inc',
    currency: 'USD',
    isin: 'US0378331005',
    cusip: '037833100',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Consumer Electronics',
    website: 'https://www.apple.com/',
    description: "Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. The company is headquartered in Cupertino, California and currently employs 137,000 full-time employees. The company is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft. The firm's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam acoustic fingerprint utility, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.",
    ceo: 'Mr. Timothy Cook',
    sector: 'Technology',
    country: 'US',
    fullTimeEmployees: '137000',
    phone: '14089961010',
    address: '1 Apple Park Way',
    city: 'Cupertino',
    state: 'CALIFORNIA',
    zip: '95014',
    dcfDiff: 89.92,
    dcf: 123.527,
    image: 'https://financialmodelingprep.com/image-stock/AAPL.jpg',
    ipoDate: '1980-12-12',
  }]), ctx.delay(150))),
  rest.get('https://financialmodelingprep.com/api/v3/historical-chart/30min/AAPL?apikey=78f718bb1f98542c7f205b7a95b64c04', (req, res, ctx) => res(ctx.json([
    {
      date: '2021-09-10 11:00:00',
      open: 154.35,
      low: 154.27,
      high: 154.39,
      close: 154.31,
      volume: 240231,
    },
    {
      date: '2021-09-10 10:30:00',
      open: 154.78,
      low: 153.91,
      high: 154.78,
      close: 154.35,
      volume: 6247316,
    },
    {
      date: '2021-09-10 10:00:00',
      open: 155.36,
      low: 154.68,
      high: 155.43,
      close: 154.78,
      volume: 5334062,
    },
    {
      date: '2021-09-10 09:30:00',
      open: 155,
      low: 154.88,
      high: 155.48,
      close: 155.35,
      volume: 10701978,
    },
    {
      date: '2021-09-09 16:00:00',
      open: 154.07,
      low: 154.04,
      high: 155.11,
      close: 154.49,
      volume: 1302961,
    },
    {
      date: '2021-09-09 15:30:00',
      open: 154.28,
      low: 153.95,
      high: 154.46,
      close: 154.12,
      volume: 6187211,
    },
    {
      date: '2021-09-09 15:00:00',
      open: 154.5,
      low: 154.18,
      high: 154.58,
      close: 154.28,
      volume: 2751856,
    },
    {
      date: '2021-09-09 14:30:00',
      open: 154.43,
      low: 154.09,
      high: 154.54,
      close: 154.5,
      volume: 3048822,
    },
    {
      date: '2021-09-09 14:00:00',
      open: 154.44,
      low: 154.24,
      high: 154.55,
      close: 154.43,
      volume: 2447589,
    },
    {
      date: '2021-09-09 13:30:00',
      open: 154.5,
      low: 154.26,
      high: 154.6,
      close: 154.45,
      volume: 3334371,
    },
    {
      date: '2021-09-09 13:00:00',
      open: 154.91,
      low: 154.32,
      high: 155.08,
      close: 154.5,
      volume: 3164827,
    },
    {
      date: '2021-09-09 12:30:00',
      open: 155.1,
      low: 154.87,
      high: 155.23,
      close: 154.91,
      volume: 2080893,
    }]), ctx.delay(150))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
