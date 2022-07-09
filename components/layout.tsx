import { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

const Background = dynamic(() => import('./background/background'))
const Social = dynamic(() => import('./social/social'))
const Navbar = dynamic(() => import('./navbar/navbar'))

type LayoutProps = {
  children: ReactElement | ReactElement[]
}

const StyledLayout = styled.div`
  position: relative;
`

export default function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Background />
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {children}
      </AnimatePresence>
      <Social />
      <Navbar />
    </StyledLayout>
  )
}
