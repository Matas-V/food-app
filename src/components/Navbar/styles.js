import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  appBar: {
    flexDirection: 'row-reverse',
    top: 0,
  },
  menuButton: {
    display: 'flex',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  infoBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px auto',
    width: '100%'
  },
  title: {
    display: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      margin: '0 20px',
    },
  },
  navLinks: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.5rem',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    height: '3rem',
    marginRight: '20px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(2),
    },
  },
  imgCon: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  dropMenu: {
    backgroundColor: theme.palette.primary.main,
  },
  dropLink: {
    textDecoration: 'none',
    margin: '15px auto',
    color: 'white',
    '&:hover': {
      color: 'black',
      transition: '1s linear'
    },
  }
}));

export default useStyles;