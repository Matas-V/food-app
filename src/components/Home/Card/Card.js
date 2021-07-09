import React, {useState} from 'react';
import { Card, CardMedia, CardContent, CardActionArea, CardActions, Typography, Button, Grid } from '@material-ui/core';
import MealModal from '../../Modal/Modal';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const CardMeal = ({ item }) => {
  const { meal, photo } = item || {};
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = (e) => {
    e.preventDefault();
    history.push(`/${meal}`);
    window.scrollTo(0, 0);
  }

  return (
    <Grid item lg={4} sm={6} xs={12}>
      <Card>
        <CardActionArea onClick={() => setModalOpen(true)}>
          <CardMedia
            className={classes.image}
            image={photo}
            title="Meal"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {meal}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="outlined" onClick={(e) => handleRoute(e)}>
            Learn More
          </Button>
        </CardActions>
      </Card>

      <MealModal modalOpen={modalOpen} setModalOpen={setModalOpen} item={item}/>
    </Grid>
  )
}

export default CardMeal;
