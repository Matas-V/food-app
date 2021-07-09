import React from 'react';
import { useHistory } from 'react-router-dom';
import hero from '../../images/hero.5e86e146';
import Navbar from '../Navbar/Navbar';
import { Typography, Button, Container, Grid } from '@material-ui/core';
import kid from '../../images/kid.6083ee58';
import useStyles from './styles';
import Question from './Question/Question';
import CardMeal from './Card/Card';
import Footer from '../Footer/Footer';

import { questions, data } from '../../data/data';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = (e) => {
    e.preventDefault();
    history.push('/menu');
    window.scrollTo(0,0);
  }

  return (
    <main>
      <Navbar />
      <div id="hero" style={{ position: 'relative', zIndex: '10' }}>
        <img className={classes.hero} src={hero} alt="Food table" />
        <div className={classes.heroText}>
          <Typography variant="h1" align="center" className={classes.text}>Your Table Meals</Typography>
          <Button className={classes.heroButton} color="primary" variant="contained" size="large" onClick={(e) => handleRoute(e)}>
            Menu
          </Button>
          <Typography variant="h5" gutterBottom align="center" className={classes.text} style={{fontSize: '1.5rem'}}>Check it out!</Typography>
        </div>
      </div>

      <section id="meals" className={classes.section}>
        <Typography variant="h2" align="center" color="primary" className={classes.title}>Meals</Typography>
        <Grid className={classes.meals} container={true} spacing={6}>
          {data && (
            <>
              <CardMeal item={data[0]}/>
              <CardMeal item={data[1]}/>
              <CardMeal item={data[2]}/>
              <CardMeal item={data[3]}/>
              <CardMeal item={data[4]}/>
            </>
          )}
        </Grid>
        <Button style={{maxWidth: '150px', margin: '15px auto'}} size="large" variant="contained" justify="center" color="primary" onClick={(e) => handleRoute(e)}>Full Menu</Button>
      </section>

      <section id="about" className={classes.section}>
        <Typography variant="h2" align="center" color="primary" className={classes.title}>About Us</Typography>
        <Container maxWidth="md" className={classes.aboutCon}>
          <Typography variant="h6" className={classes.aboutInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis felis rutrum egestas imperdiet. Aenean non dolor placerat, gravida mi eu, ultrices odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec facilisis egestas rutrum. Curabitur placerat faucibus arcu, vel varius nisl venenatis pharetra. Phasellus id ante commodo, dictum odio quis, iaculis elit. Donec sapien nunc, rutrum eu diam non, hendrerit blandit velit. In venenatis viverra massa, luctus maximus dolor porta eu. Sed nulla elit, pretium id dui ut, feugiat tincidunt lectus. Mauris iaculis, felis vitae iaculis viverra, dolor enim sagittis dui, vel bibendum nunc sem non enim. Praesent sodales felis nec ante venenatis facilisis. Donec in felis mauris.</Typography>
          <img src={kid} alt="cute kid" className={classes.aboutImg}/>
        </Container>
      </section>

      <section id="faq" className={classes.section}>
        <Typography variant="h2" align="center" color="primary" className={classes.title}>FAQ</Typography>
        <Container maxWidth="md">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </Container>
      </section>

      <Footer/>
    </main>
  )
}

export default Home
