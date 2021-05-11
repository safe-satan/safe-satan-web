import React from 'react'
import data from '../_tokenContract.json'
import {
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  makeStyles,
} from '@material-ui/core'

import links from '../_drawerLinks.json'

const iOS =
  (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const useStyles = makeStyles(() => ({
  paper: {
    width: '300px',
  },
}))

export type AppDrawerProps = {
  open: boolean
  toggle: (open: boolean) => void
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, toggle }) => {
  const classes = useStyles()
  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={open}
      onClose={() => toggle(false)}
      onOpen={() => toggle(true)}
      classes={classes}
    >
      <List>
        {links.map(({ url, text }) => (
          <ListItem>
            <Link
              onClick={() => toggle(false)}
              href={url.replace('{contract}', data.contract)}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )
}
export default AppDrawer
