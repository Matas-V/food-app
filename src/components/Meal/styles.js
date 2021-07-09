import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainCon: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    maxWidth: '50%',
    height: 'auto',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginBottom: '20px',
    },
  },
  times: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px 0',
  },
  timesSection: {
    textAlign: 'center',
    margin: 'auto',
  },
  tag: {
    margin: '20px 10px',
    color: 'white',
    fontWeight: 'bold',
    padding: '0 3px',
  },
  buttonsDiv: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    color: 'white',
    margin: '0 0 20px 0',
  }
}))

export default useStyles;