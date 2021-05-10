import React from 'react'

import { Link, List, ListItem, SwipeableDrawer } from '@material-ui/core'

import links from './drawerLinks.json'

const iOS =
  (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

export type AppDrawerProps = {
  open: boolean
  toggle: (open: boolean) => void
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, toggle }) => (
  <SwipeableDrawer
    disableBackdropTransition={!iOS}
    disableDiscovery={iOS}
    open={open}
    onClose={() => toggle(false)}
    onOpen={() => toggle(true)}
  >
    <List>
      {links.map(({ url, text }) => (
        <ListItem>
          <Link href={url}>{text}</Link>
        </ListItem>
      ))}
    </List>
  </SwipeableDrawer>
)

export default AppDrawer
