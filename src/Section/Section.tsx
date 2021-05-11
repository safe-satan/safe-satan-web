import React, { ReactNode, useState } from 'react'
import clsx from 'clsx'
import { Container, Divider, Typography, makeStyles } from '@material-ui/core'
import { Waypoint } from 'react-waypoint'

const duration = 600

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  root: {
    margin: `${spacing(4)}px auto 0`,
    width: '80vw',
    maxWidth: '1080px',
    opacity: 0,
    transition: `opacity ${duration}ms ease-in-out`,
    [breakpoints.down('xs')]: {
      width: '99vw',
      margin: `0 auto`,
    },
  },
  entered: { opacity: 1 },
  sectionHead: {
    display: 'block',
    margin: '0 auto',
    paddingTop: spacing(8),
    marginTop: spacing(8) * -1,
    marginBottom: spacing(3),
    textAlign: 'center',
  },
  children: {
    minHeight: '360px',
    '&>*:not(:first-of-type)': {
      marginTop: spacing(3),
    },
  },
  divider: {
    margin: `${spacing(4)}px 0`,
  },
}))

export type SectionProps = {
  id: string
  title?: string
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const classes = useStyles()
  const [entered, setEntered] = useState(false)

  return (
    <Container
      id={id}
      className={clsx(classes.root, entered && classes.entered)}
    >
      {title && (
        <Typography noWrap variant="h4" className={classes.sectionHead}>
          {title}
        </Typography>
      )}
      <div className={classes.children}>{entered && children}</div>
      <Waypoint onEnter={() => setEntered(true)} />
      <Divider className={classes.divider} />
    </Container>
  )
}
export default Section
