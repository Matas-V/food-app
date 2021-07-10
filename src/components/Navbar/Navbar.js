import React, { useState } from 'react';
import { AppBar, IconButton, Typography, Drawer, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles.js';
import cook from '../../images/cookingLog.png';

const url = 'https://mealsapp.netlify.app/';

export default function Navbar() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.infoBar}>
          <div className={classes.imgCon}>
            <a href={`${url}#hero`}>
              <img src={cook} className={classes.logo} alt="logo" />
            </a>
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            <a href={`${url}#meals`} className={classes.navLinks}>Meals</a>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <a href={`${url}#about`} className={classes.navLinks}>About</a>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <a href={`${url}#faq`} className={classes.navLinks}>FAQ</a>
          </Typography>
        </div>
      </AppBar>
      <Drawer anchor='top' open={openMenu} onClose={() => setOpenMenu(false)}>
        <div className={classes.dropMenu}>
          <Typography className={classes.dropLink} variant="h4" align="center">
            <Link color="inherit" href={`${url}#meals`} onClick={() => setOpenMenu(false)} underline="none">
              Meals
            </Link>
          </Typography>
          <Typography className={classes.dropLink} variant="h4" align="center">
            <Link href={`${url}#about`} color="inherit" onClick={() => setOpenMenu(false)} underline="none">
              About
            </Link>
          </Typography>
          <Typography className={classes.dropLink} variant="h4" align="center">
            <Link href={`${url}#faq`} color="inherit" onClick={() => setOpenMenu(false)} underline="none">
              FAQ
            </Link>
          </Typography>
        </div>
      </Drawer>
    </div>
  );
}