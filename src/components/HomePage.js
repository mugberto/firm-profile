import Grid from "@material-ui/core/Grid";
import logo from '../images/logo.png';

const HomePage = () => {
  const firms = [
    {
      symbol: 'fb',
      name: 'Facebook',
      price: 382,
    },
    {
      symbol: 'AAPL',
      name: 'Apple',
      price: 156,
    },
    {
      symbol: 'AMZN',
      name: 'Amazon',
      price: 3509,
    },
    {
      symbol: 'NFLX',
      name: 'Netflix',
      price: 606,
    },
    {
      symbol: 'GOOG',
      name: 'Google',
      price: 2885,
    },

  ];
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <img src={logo} alt="logo" />
      </Grid>
      {firms.map((firm) => (<Grid item xs={6} key={firm.symbol}>
        <div>{firm.name}</div>
        <div>{firm.price}</div>
      </Grid>))}
    </Grid>
  );
};

export default HomePage;