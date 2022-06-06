import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Curtain from '../curtain/curtain'
import navigations from './navigations'
import Toggle from '../toggle/toggle'

const StyledNavbar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 100vh;
  left: 0;
`

const StyledMenu = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const StyledAnchor = styled.a`
  display: block;
  padding-left: 0.3em;
  margin: 10px 0;
  font-size: 2rem;
  letter-spacing: 0.3em;
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.5s;
  cursor: pointer;

  :hover {
    padding-left: 0.6em;
    letter-spacing: 0.6em;
    transition-duration: 0.5s;
  }
`

const variants = {
  visible: {
    bottom: 0,
  },
  hidden: {
    bottom: '100vh',
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleToggle(): void {
    setIsOpen(!isOpen)
  }

  return (
    <StyledNavbar
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      transition={{
        type: 'tween',
        ease: [0.6, -0.28, 0.735, 0.045],
        duration: 0.5,
      }}
      variants={variants}
    >
      <Curtain isOpen={isOpen} />
      <StyledMenu>
        {isOpen &&
          navigations.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: item.delay }}
              >
                <Link href={item.path}>
                  <StyledAnchor onClick={handleToggle}>
                    {item.title}
                  </StyledAnchor>
                </Link>
              </motion.div>
            )
          })}
      </StyledMenu>
      <Toggle isOpen={isOpen} handleToggle={handleToggle} />
    </StyledNavbar>
  )
}
