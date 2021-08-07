import React, { useState } from 'react';

import { Box, CssBaseline } from '@material-ui/core';

import Theme from './Theme';
import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';
import AppFooter from './AppFooter';
import ScrollTop from './ScrollTopButton';
import SectionHero from './SectionHero';
import SectionAbout from './SectionAbout';
import SectionTokenomics from './SectionTokenomics';
import SectionMemes from './SectionMemes';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Theme>
      <Box>
        <CssBaseline />
        <AppHeader onMenuOpen={() => setDrawerOpen(true)} />
        <AppDrawer open={drawerOpen} toggle={setDrawerOpen} />
        <ScrollTop />
        <SectionHero />
        <SectionAbout />
        <SectionTokenomics />
        <SectionMemes />
        <AppFooter />
      </Box>
    </Theme>
  );
};

export default App;
