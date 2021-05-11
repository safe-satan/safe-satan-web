import React from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import Countdown from 'react-countdown'
import countdownData from '../_countdownData.json'
import BuyButton from '../BuyButton'

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
  overlay: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    margin: '0 auto',
    background: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    height: 'auto',
    width: '50%',
    minWidth: 400,
    color: '#fff',
    textShadow: '4px 4px 2px rgba(0,0,0,0.2)',
    padding: spacing(3),
  },
  countdownItem: {
    background: 'rgba(0, 0, 0, .2)',
    margin: spacing(1),
    borderRadius: 5,
    padding: spacing(1),
  },
}))

const SectionHero: React.FC = () => {
  const classes = useStyles()
  return (
    <Container id="hero" className={classes.root}>
      <img src="/img/seal.png" alt="" className={classes.heroImage} />
      <Box
        className={classes.overlay}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4">{countdownData.title}</Typography>
        <Countdown
          date={new Date(countdownData.date)}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <BuyButton />
            } else {
              return (
                <Box display="flex">
                  <Typography className={classes.countdownItem}>
                    {days}d
                  </Typography>
                  <Typography className={classes.countdownItem}>
                    {hours}h
                  </Typography>
                  <Typography className={classes.countdownItem}>
                    {minutes}m
                  </Typography>
                  <Typography className={classes.countdownItem}>
                    {seconds}s
                  </Typography>
                </Box>
              )
            }
          }}
        />
      </Box>
    </Container>
  )
}
export default SectionHero
