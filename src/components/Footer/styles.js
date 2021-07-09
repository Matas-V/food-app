import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  author: {
    margin: '20px',
    fontSize: '0.8rem',
  }
}))

export default useStyles;