import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import StockChart from './StockChart';
import { clearData, loadData } from '../redux/details/details';

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
  const { symbol } = useParams();

  const { profileData, chartData } = useSelector((state) => state.detailsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(symbol));
    return () => {
      dispatch(clearData());
    };
  }, []);

  useEffect(() => {
    document.getElementById('page-title').innerHTML = `${profileData ? profileData.companyName : ''} - Profile`;
  }, [profileData]);

  const classes = useStyle();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} container className={classes.hero}>
        <Grid item xs={6} container justifyContent="flex-end" style={{ paddingRight: '8px' }}>
          {profileData ? <img src={profileData.image} alt="logo" className={classes.logo} /> : ''}
        </Grid>
        <Grid item xs={6} container direction="column" justifyContent="center" alignItems="start" style={{ paddingLeft: '8px' }}>
          <h1 style={{ lineHeight: '1', fontSize: '1.2rem' }}>
            {profileData ? profileData.companyName : ''}
          </h1>
          <p>
            {profileData ? profileData.address : ''}
            {' '}
            <br />
            {profileData ? profileData.city : ''}
            {' '}
            <br />
            {profileData ? profileData.state : ''}
            {' '}
            <br />
            {profileData ? profileData.phone : ''}
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.boxTitle}>STOCK CHART</Grid>
      <Grid item xs={12} className={classes.chartBG}>
        <StockChart cdata={chartData} />
      </Grid>
      <Grid item xs={12} className={classes.boxTitle}>DESCRIPTION</Grid>
      <Grid item xs={12} className={classes.chartBG}>
        <p>{profileData ? profileData.description : ''}</p>
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
