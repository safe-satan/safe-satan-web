import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import heroImage from '../images/seal-hero.jpg';
import Countdown from '../Countdown';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    position: 'relative',
  },
  heroImage: {
    margin: '0 auto',
    height: '88vh',
    display: 'block',
    marginBottom: spacing(6),
    maxWidth: '90vw',

    [breakpoints.down('xs')]: {
      height: 'auto',
      margin: `${spacing(6)}px auto`,
    },
  },
  countdown: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    margin: '0 auto',

    [breakpoints.down('xs')]: {
      top: 100,
    },
  },
}));

const SectionHero: React.FC = () => {
  const classes = useStyles();
  return (
    <Container id="hero" className={classes.root}>
      <img src={heroImage} alt="" className={classes.heroImage} />
      <Countdown className={classes.countdown} />
    </Container>
  );
};
export default SectionHero;
