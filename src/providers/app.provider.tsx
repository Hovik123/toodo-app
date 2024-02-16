'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function AppProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}
