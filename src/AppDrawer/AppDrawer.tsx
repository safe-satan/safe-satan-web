import React from 'react';
import data from '../_tokenContract.json';
import {
  Box,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  makeStyles,
} from '@material-ui/core';

import img from '../images/seal-silhouette-purple.png';
import socialLinks from '../_socialLinks';
import links from '../_drawerLinks.json';

const iOS =
  (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles(({ spacing }) => ({
  img: {
    width: 70,
    display: 'block',
    margin: `0 auto`,
  },
  paper: {
    padding: spacing(3),
    width: '300px',
  },
  divider: {
    margin: `${spacing(3)}px`,
  },
}));

export type AppDrawerProps = {
  open: boolean;
  toggle: (open: boolean) => void;
};

const AppDrawer: React.FC<AppDrawerProps> = ({ open, toggle }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={open}
      onClose={() => toggle(false)}
      onOpen={() => toggle(true)}
      classes={classes}
    >
      <Link onClick={() => toggle(false)} href="#" className={classes.img}>
        <img src={img} alt="" width="100%" />
      </Link>
      <Divider className={classes.divider} />
      <List>
        {links.map(({ url, text }) => (
          <ListItem button>
            <Link
              color="secondary"
              onClick={() => toggle(false)}
              href={url.replace('{contract}', data.contract)}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <Box mt={-1} display="flex" justifyContent="center">
        {socialLinks.map(({ label, url, icon: Icon }) => (
          <IconButton href={url} target="_blank" title={label}>
            <Icon fontSize="large" color="secondary" />
          </IconButton>
        ))}
      </Box>
    </SwipeableDrawer>
  );
};
export default AppDrawer;
