import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { ArrowBackIos, Settings, Mic } from '@material-ui/icons';
import HeaderTitle from './HeaderTitle';

const useStyle = makeStyles({
  headerBG: {
    backgroundColor: '#EC4C8B',
    padding: '0.5em',
  },
});

const Header = () => {
  const classes = useStyle();

  return (
    <Grid container justifyContent="space-between" className={classes.headerBG}>
      <Grid item xs={1}>
        <Button onClick={() => window.history.back()}>
          <ArrowBackIos />
        </Button>
      </Grid>
      <Grid item xs={7} style={{ textAlign: 'center' }} container alignItems="center" justifyContent="center">
        <HeaderTitle />
      </Grid>
      <Grid item xs={1}><Mic /></Grid>
      <Grid item xs={1}><Settings /></Grid>
    </Grid>
  );
};

export default Header;
