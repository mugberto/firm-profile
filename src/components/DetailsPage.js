import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import StockChart from './StockChart';

const useStyle = makeStyles({
  hero: {
    padding: '3em',
    backgroundColor: '#FB5294',
  },
  icon: {
    display: 'inline-block',
    borderRadius: '50%',
    border: '2px solid white',
    height: '20px',
  },
  boxlight: {
    backgroundColor: '#DB4681',
    padding: '1em',
    height: '10rem',
  },
  boxDark: {
    backgroundColor: '#D1447A',
    padding: '1em',
    height: '10rem',
  },
  boxTitle: {
    backgroundColor: '#DF4783',
    fontSize: '0.85rem',
    padding: '0.5em',
  },
  companyName: {
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  logo: {
    width: '65px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    mixBlendMode: 'multiply',
  },
  boxLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    textDecoration: 'none',
  },
  chartBG: {
    backgroundColor: '#E84987',
    padding: '1rem',
  },
});

const DetailsPage = () => {
  const firmDetails = {
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
  };

  const classes = useStyle();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} container className={classes.hero}>
        <Grid item xs={6} container justifyContent="flex-end" style={{ paddingRight: '8px' }}>
          <img src={firmDetails.image} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item xs={6} container direction="column" justifyContent="center" alignItems="start" style={{ paddingLeft: '8px' }}>
          <h1 style={{ lineHeight: '1', fontSize: '1.2rem' }}>
            {firmDetails.companyName}
          </h1>
          <p>
            {firmDetails.address}
            {' '}
            <br />
            {firmDetails.city}
            {' '}
            <br />
            {firmDetails.state}
            {' '}
            <br />
            {firmDetails.phone}
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.boxTitle}>STOCK CHART</Grid>
      <Grid item xs={12} className={classes.chartBG}>
        <StockChart />
      </Grid>
      <Grid item xs={12} className={classes.boxTitle}>DESCRIPTION</Grid>
      <Grid item xs={12} className={classes.chartBG}>
        <p>{firmDetails.description}</p>
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
