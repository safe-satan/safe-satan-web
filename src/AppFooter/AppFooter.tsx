import React from 'react';
import { Box, IconButton, makeStyles } from '@material-ui/core';

import links from '../_socialLinks';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.secondary.main,
  },
}));

const AppFooter: React.FC = () => {
  const classes = useStyles();
  return (
    <Box
      height="70px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      {links.map(({ label, url, icon: Icon }) => (
        <IconButton href={url} target="_blank" title={label}>
          <Icon fontSize="large" color="primary" />
        </IconButton>
      ))}
    </Box>
  );
};
export default AppFooter;
