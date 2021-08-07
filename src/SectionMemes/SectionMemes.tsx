import { Box, Typography } from '@material-ui/core';
import MemeGenerator from '../MemeGenerator';
import Section from '../Section';

// const addedMemes = [];

const SectionMemes: React.FC = () => {
  return (
    <Section id="memes">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">Make a meme!</Typography>
        <MemeGenerator />
      </Box>
    </Section>
  );
};

export default SectionMemes;
