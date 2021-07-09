import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  meals: {
    maxWidth: '70%',
    display: 'flex',
    margin: '0 auto',
  },
  footer: {
    backgroundColor: '#676868',
    margin: '100px 0 0 0',
    color: 'white',
  },
  infoFooter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0',
  },
}))

export default useStyles;