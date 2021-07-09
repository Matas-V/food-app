import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mealInfo: {
    margin: 'auto 25px',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  img: {
    maxHeight: '400px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
  }
}));

export default useStyles;