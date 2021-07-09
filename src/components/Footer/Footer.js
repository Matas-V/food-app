import React from 'react';
import { IconButton, Link, Typography} from '@material-ui/core';
import useStyles from './styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <div className={classes.infoFooter}>
          <div>
            <IconButton style={{color: 'white'}} size="medium">
              <Link color="inherit" href="http://facebook.com" target="_blank" rel="noopener">
              <FacebookIcon />
              </Link>
            </IconButton>
            <IconButton style={{color: 'white'}} size="medium">
              <Link color="inherit" href="http://instagram.com" target="_blank" rel="noopener">
              <InstagramIcon />
              </Link>
            </IconButton>
            <IconButton style={{color: 'white'}} size="medium">
              <Link color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
                <TwitterIcon />
              </Link>
            </IconButton>
          </div>
          <Typography variant="subtitle2" align="center" style={{ fontSize: '1rem', letterSpacing: '2px' }}>Copyright &#169; Meals Recipes Company 2021. All Rights Reserved</Typography>
          <p className={classes.author}>Designed by Matas Valatka</p>
        </div>
      </footer>
  )
}

export default Footer;
