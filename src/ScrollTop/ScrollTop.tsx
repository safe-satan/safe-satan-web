import React from 'react'
import { Fab, makeStyles, useScrollTrigger, Zoom } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const ScrollTop: React.FC = () => {
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
        role="presentation"
        className={classes.root}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  )
}

export default ScrollTop
