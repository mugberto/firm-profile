import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import logo from '../images/logo.png';
import { loadData } from '../redux/home/home';

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
    opacity: '0.5',
  },
  boxLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    textDecoration: 'none',
  },
});

const HomePage = () => {
  const classes = useStyle();
  let bg = classes.boxlight;

  const firms = useSelector((state) => state.homeData).slice(0, 100);

  const dispatch = useDispatch();

  useEffect(() => {
    if (firms.length === 0) {
      dispatch(loadData());
    }
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} container className={classes.hero}>
        <Grid item xs={6} container justifyContent="flex-end" style={{ paddingRight: '8px' }}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="center" style={{ paddingLeft: '8px' }}>
          <h1 style={{ lineHeight: '1', fontSize: '1.2rem' }}>
            FIRM
            <br />
            <span style={{ marginLeft: '0.7em' }}>PROFILE</span>
          </h1>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.boxTitle}>STOCK PRICES PER COMPANY</Grid>
      {firms.map((firm, i) => {
        if (i % 2 !== 0) {
          if (bg === classes.boxlight) {
            bg = classes.boxDark;
          } else {
            bg = classes.boxlight;
          }
        }
        return (
          <Grid
            item
            xs={6}
            key={firm.symbol}
            className={bg}
          >
            <Link to={`/details/${firm.symbol}`} className={classes.boxLink}>
              <div className={classes.icon}>
                <ArrowRightAltIcon style={{ fontSize: '1rem' }} />
              </div>
              <div style={{ textAlign: 'end' }}>
                <div className={classes.companyName}>{firm.name}</div>
                <div className={classes.stockPrice}>
                  <span>$</span>
                  {firm.price}
                </div>
              </div>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomePage;
