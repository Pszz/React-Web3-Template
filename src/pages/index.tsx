import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { useAccount } from 'wagmi'
import { Web3Button, useWeb3Modal } from '@web3modal/react'
import styles from './styles'
import PageLayout from '@/components/PageLayout'

export default function Index() {
  const { open } = useWeb3Modal()
  const { address } = useAccount()
  return (
    <PageLayout>
      <Box sx={styles.root}>
        <Stack direction="row" spacing={32} sx={{ m: 32 }}>
          <Web3Button />
          <Button
            variant="contained"
            onClick={() => {
              open()
            }}
          >
            Custom Connection Wallet
          </Button>
        </Stack>
        <div>Address: {address}</div>
      </Box>
    </PageLayout>
  )
}
