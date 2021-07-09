import React from 'react';
import Navbar from '../Navbar/Navbar';
import CardMeal from '../Home/Card/Card';
import Footer from '../Footer/Footer';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { data } from '../../data/data';

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />

      <div className={classes.section}>
        <Typography variant="h2" align="center" color="primary" className={classes.title}>Meals</Typography>
        <Grid className={classes.meals} container={true} spacing={6}>
          {data.map((meal, i) => (
            <CardMeal key={i} item={meal}/>
          ))}
        </Grid>
      </div>

      <Footer/>
    </div>
  )
}

export default Menu;