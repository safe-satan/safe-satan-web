import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { PieChart } from 'react-minimal-pie-chart';
import data from '../_tokenomicsData.json';

import twoSeals from '../images/two-cute-seals.jpg';
import sealApproval from '../images/sealapproval.jpg';
import sealsSwimming from '../images/seals-swimming.png';

import Section from '../Section';

const imgs = [sealsSwimming, sealApproval, twoSeals];

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',

    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    [breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  card: {
    maxWidth: '300px',
    margin: spacing(2),
    animation: '$slide-in 600ms ease-out',
    [breakpoints.down('sm')]: {
      width: '50%',
    },
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  '@keyframes slide-in': {
    from: {
      transform: 'translateY(-100%)',
    },
    to: {
      transform: 'translateY(0)',
    },
  },
}));

const { cards, split } = data;

const SectionTokenomics: React.FC = () => {
  const [selected, setSelected] = useState(-1);
  const classes = useStyles();

  return (
    <Section id="tokenomics" title="Tokenomics">
      <div className={classes.container}>
        <div className={classes.cards}>
          {cards.map(({ title, subtext }, index) => (
            <Card className={classes.card} elevation={4}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Seal of Approval"
                  height="140"
                  image={imgs[index]}
                  title="Seal of Approval"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {subtext}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <PieChart
          animate
          animationDuration={1000}
          radius={PieChart.defaultProps.radius - 6}
          lineWidth={60}
          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          segmentsShift={(index) => (index === selected ? 6 : 0)}
          animationEasing="ease-out"
          label={({ dataEntry: { title, percentage } }) =>
            title + ': ' + Math.round(percentage) + '%'
          }
          labelPosition={70}
          labelStyle={{
            fill: '#fff',
            opacity: 0.75,
            pointerEvents: 'none',
            fontSize: 4,
            textShadow: '4px 4px 2px rgba(0,0,0,0.2)',
          }}
          center={[50, 50]}
          data={split}
          onClick={(_, index) => setSelected(index === selected ? -1 : index)}
        />
      </div>
    </Section>
  );
};
export default SectionTokenomics;
