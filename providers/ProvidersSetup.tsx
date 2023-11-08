import { ThemeProvider } from '@/components/theme-provider'
import { GlobalContextProvider } from '@/contexts/globalContext'
import React, { ReactNode } from 'react'

const ProvidersSetup = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
    </ThemeProvider>
  )
}

export default ProvidersSetup
