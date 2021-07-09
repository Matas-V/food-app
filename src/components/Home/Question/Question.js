import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

const Question = ({ question }) => {
  const classes = useStyles();
  const { answer, question: quest } = question;

  return (
    <div style={{margin: '20px 0'}}>
      <Accordion>
        <AccordionSummary className={classes.accordion} expandIcon={<ExpandMoreIcon/>}>
          <Typography variant="h6">{quest}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion}>
          <Typography variant="h6"><i>- {answer}</i></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Question;
