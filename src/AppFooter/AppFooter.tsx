import React from 'react'
import { Box, Link, makeStyles } from '@material-ui/core'

import links from '../_socialLinks'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.secondary.main,
  },
}))

const AppFooter: React.FC = () => {
  const classes = useStyles()
  return (
    <Box
      height="60px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      {links.map(({ label, url, icon: Icon }) => (
        <Link href={url} title={label}>
          <Icon fontSize="large" color="primary" />
        </Link>
      ))}
    </Box>
  )
}
export default AppFooter
