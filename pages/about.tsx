import { ReactElement } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/layout'

const StyledAbout = styled(motion.div)`
  position: relative;
`

const StyledContainer = styled.div`
  padding: 0 20px;
  max-width: 75em;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 30em) {
    max-width: 100%;
  }

  @media screen and (min-width: 48em) {
    max-width: 100%;
  }

  @media screen and (min-width: 60.625em) {
    max-width: 60.625em;
  }

  @media screen and (min-width: 75em) {
    max-width: 60.625em;
  }
`

const StyledContent = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const StyledTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export default function About() {
  return (
    <StyledAbout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <StyledContainer>
        <StyledContent>
          <StyledTextContainer>
            <Link href="/">
              <StyledLink>Go back home!</StyledLink>
            </Link>
          </StyledTextContainer>
        </StyledContent>
      </StyledContainer>
    </StyledAbout>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
