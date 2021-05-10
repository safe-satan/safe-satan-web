import React, { useState } from 'react'

import { Container } from '@material-ui/core'

import AppHeader from './AppHeader'
import AppDrawer from './AppDrawer'
import ScrollTop from './ScrollTop'
import './App.css'

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div className="App">
      <AppHeader onMenuOpen={() => setDrawerOpen(true)} />
      <AppDrawer open={drawerOpen} toggle={setDrawerOpen} />
      <ScrollTop />
      <Container>
        {[...new Array(12)].map(() => (
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
        ))}
      </Container>
    </div>
  )
}

export default App
