import { Box } from '@mui/material'
import React from 'react'
import Header from '../common/Header'

export type IPageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Box sx={{ pt: 86, minHeight: 'calc(100vh - 66px)' }}>{children}</Box>
    </main>
  )
}

export default PageLayout
