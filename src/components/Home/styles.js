import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroText: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    textTransform: 'uppercase',
    fontFamily: 'verdana',
    fontSize: '7em',
    fontWeight: '700',
    color: '#f5f5f5',
    textShadow:
      "1px 1px 1px #919191,\n        1px 2px 1px #919191,\n        1px 3px 1px #919191,\n        1px 4px 1px #919191,\n        1px 5px 1px #919191,\n        1px 6px 1px #919191,\n        1px 7px 1px #919191,\n        1px 8px 1px #919191,\n        1px 9px 1px #919191,\n        1px 10px 1px #919191,\n    1px 18px 6px rgba(16,16,16,0.4),\n    1px 22px 10px rgba(16,16,16,0.2),\n    1px 25px 35px rgba(16,16,16,0.2),\n    1px 30px 60px rgba(16,16,16,0.4)",
  },
  hero: {
    width: '100%',
    objectFit: 'cover',
    height: '700px',
    opacity: 0.7,
  },
  heroButton: {
    margin: '15px auto',
    color: 'white',
    padding: '10px 30px',
    width: '40%',
    minWidth: '130px',
    fontSize: '2rem',
  },
  section: {
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    margin: '5rem auto',
    borderBottom: 'solid black 2px'
  },
  aboutCon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 15px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '0 30px',
    }
  },
  aboutInfo: {
    width: '40%',
    wordBreak: 'break-word',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  aboutImg: {
    width: '50%',
    maxHeight: '310px',
    borderRadius: '15px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  meals: {
    maxWidth: '70%',
    display: 'flex',
    margin: '0 auto',
  },
}))

export default useStyles;