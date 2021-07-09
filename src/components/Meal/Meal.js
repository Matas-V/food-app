import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container, Typography, Chip, Button } from '@material-ui/core';
import useStyles from './styles';

import { useParams, useHistory } from 'react-router-dom';
import { data } from '../../data/data';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Meal = () => {
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [currentMeal, setCurrentMeal] = useState(data.filter((item) => id === item.meal)[0]);
  const [currentMealIndex, setCurrentMealIndex] = useState(data.indexOf(currentMeal));
  const { photo, meal, description, instructions, ingredients, tags, prep, cook, servings} = currentMeal;

  const handleNext = () => {
    const nextIndex = currentMealIndex < data.length - 1? currentMealIndex + 1:0;
    setCurrentMealIndex(nextIndex);
  }
  
  useEffect(() => {
    setCurrentMeal(data.filter((item) => id === item.meal)[0]);
    history.push(`/${data[currentMealIndex].meal}`);
  }, [id, currentMealIndex, history]);

  return (
    <div>
      <Navbar />

      <Container maxWidth="md" style={{marginTop: '120px'}}>

        <div className={classes.buttonsDiv}>
          <Button color="primary" variant="contained" size="large" startIcon={<ArrowBackIcon/>} className={classes.buttonStyle} onClick={() => history.push('/menu')}>Menu</Button>
          <Button color="primary" variant="contained" size="large" endIcon={<NavigateNextIcon/>} className={classes.buttonStyle} onClick={handleNext}>Next</Button>
        </div>

        <section className={classes.mainCon}>
          <img src={photo} alt={meal} className={classes.image}/>
          <div style={{margin: 'auto 30px'}}>
            <Typography variant="h3" gutterBottom>{meal}</Typography>
            <Typography variant="subtitle1">{description}</Typography>
            <section>
              {tags.map((tag, i) => (
                <Chip key={i} className={classes.tag} color="primary" size="small" label={tag}/>
              ))}
            </section>
          </div>
        </section>

        <div className={classes.times}>
          <section className={classes.timesSection}>
            <AccessTimeIcon fontSize="large" />
            <Typography variant="subtitle2"><strong>Prep Time</strong></Typography>
            <Typography variant="subtitle2">{prep} min.</Typography>
          </section>
          <section className={classes.timesSection}>
            <AccessTimeIcon fontSize="large" />
            <Typography variant="subtitle2"><strong>Cook Time</strong></Typography>
            <Typography variant="subtitle2">{cook} min.</Typography>
          </section>
          <section className={classes.timesSection}>
            <PeopleOutlineIcon fontSize="large" />
            <Typography variant="subtitle2"><strong>Serving</strong></Typography>
            <Typography variant="subtitle2">{servings}</Typography>
          </section>
        </div>

        <div style={{ margin: '70px auto' }}>
          <section>
            <Typography variant="h4" gutterBottom>Instructions</Typography>
            {instructions.map((info, i) => (
              <section key={i}>
                <Typography color="primary" variant="h6">STEP {i+1}</Typography>
                <div style={{height: '1px', background: '#f4b22f'}}></div>
                <Typography variant="subtitle1" gutterBottom>{info}</Typography>
              </section>
            ))}
          </section>

          <section style={{marginTop: '70px'}}>
            <Typography variant="h4" gutterBottom>Ingredients</Typography>
            {ingredients.map((info, i) => (
              <section key={i}>
                <Typography variant="subtitle1" style={{ margin: '10px 0' }}>{info}</Typography>
                <div style={{height: '1px', background: '#f4b22f'}}></div>
              </section>
            ))}
          </section>
        </div>
      </Container>

      <Footer/>
    </div>
  )
}

export default Meal;
