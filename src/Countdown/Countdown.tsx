import { Box, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import CountdownBase from 'react-countdown'

import BuyButton from '../BuyButton'
import countdownData from '../_countdownData.json'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  overlay: {
    background: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    height: 'auto',
    width: '50%',
    minWidth: 400,
    color: '#fff',
    textShadow: '4px 4px 2px rgba(0,0,0,0.2)',
    padding: spacing(3),

    [breakpoints.down('xs')]: {
      minWidth: 360,
      maxWidth: '90vw',
      padding: spacing(1),
    },
  },
  countdownItem: {
    background: 'rgba(0, 0, 0, .2)',
    margin: spacing(1),
    borderRadius: 5,
    padding: spacing(1),
  },
}))

const Countdown: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()

  const date = new Date(countdownData.date);
  const isPast = date.getTime() - Date.now() < 0;

  return (
    <Box
      className={clsx(className, classes.overlay)}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {isPast ? (
        <Typography variant="h4">{countdownData.completedTitle}</Typography>
      ) : (
        <>
          <Typography variant="h4">{countdownData.title}</Typography>
          <CountdownBase
            date={date}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <BuyButton />
              } else {
                return (
                  <Box display="flex">
                    <Typography
                      variant="h5"
                      component="span"
                      className={classes.countdownItem}
                    >
                      {days}d
                    </Typography>
                    <Typography
                      variant="h5"
                      component="span"
                      className={classes.countdownItem}
                    >
                      {hours}h
                    </Typography>
                    <Typography
                      variant="h5"
                      component="span"
                      className={classes.countdownItem}
                    >
                      {minutes}m
                    </Typography>
                    <Typography
                      variant="h5"
                      component="span"
                      className={classes.countdownItem}
                    >
                      {seconds}s
                    </Typography>
                  </Box>
                )
              }
            }}
          />
        </>
      )}

    </Box>
  )
}

export default Countdown
