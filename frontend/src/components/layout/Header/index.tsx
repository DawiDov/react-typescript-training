import React from 'react'
import { AppBar, Toolbar } from '@mui/material'

const Header = () => (
  <header>
    <AppBar
      color="primary"
      position="sticky"
      sx={{
        top: '0',
        width: '100vw',
        padding: '10px',
      }}>
      <Toolbar variant="dense">
        <h1>Course</h1>
      </Toolbar>
    </AppBar>
  </header>
)

export default Header