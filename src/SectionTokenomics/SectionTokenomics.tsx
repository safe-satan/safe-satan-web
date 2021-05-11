import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { PieChart } from 'react-minimal-pie-chart'
import data from '../_tokenomicsData.json'

import Section from '../Section'

const SectionTokenomics: React.FC = () => {
  const { supply, split } = data
  const [selected, setSelected] = useState(-1)
  return (
    <Section id="tokenomics" title="Tokenomics">
      <Typography variant="h6">Supply: {supply} tokens</Typography>
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
    </Section>
  )
}
export default SectionTokenomics
