import { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

const Background = dynamic(() => import('./background'))
const Navbar = dynamic(() => import('./navbar'))

const StyledLayout = styled.div`
  position: relative;
`

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[]
}) {
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
      <Navbar />
    </StyledLayout>
  )
}
