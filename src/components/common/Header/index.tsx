import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import styles from './styles'

const Header: React.FC = () => {
  return (
    <AppBar sx={styles.root}>
      <Toolbar>HEADER</Toolbar>
    </AppBar>
  )
}

export default Header
