import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import { Typography, Button } from '@material-ui/core';

const MealModal = ({ modalOpen, setModalOpen, item }) => {
  const classes = useStyles();
  const history = useHistory();
  const { meal, description, photo } = item || {};

  const handleRoute = (e) => {
    e.preventDefault();
    history.push(`/${meal}`);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <img src={photo} alt="Food" className={classes.img}/>
            <div className={classes.mealInfo}>
              <Typography variant="h3" gutterBottom className={classes.title}>{meal}</Typography>
              <Typography variant="body2" gutterBottom className={classes.desc}>
                {description}
              </Typography>
              <Button color="primary" variant="contained" size="small" onClick={(e) => handleRoute(e)}>Learn More</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default MealModal;