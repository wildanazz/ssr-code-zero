import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'
import { IoMenu, IoClose } from 'react-icons/io5'

type ToggleProps = {
  isOpen: boolean
  handleToggle(): void
}

const pulse = keyframes`
  0% {
    box-shadow: #2f2f2f 0 0 0 0;
  }
  75% {
    box-shadow: #2f2f2f00 0 0 0 16px;
  }
`

const StyledToggle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 36px;
  right: 36px;
  border-radius: 50px;
  cursor: pointer;

  :hover {
    background-color: #2f2f2f;
    border-radius: 50px;
    transition: all 0.2s ease-out;
    animation: ${pulse} 1500ms infinite;
  }

  :active {
    scale: 0.9;
  }
`

const IconStyles = css`
  font-size: 3rem;
  border-radius: 50px;
`

const StyledIoMenu = styled(IoMenu)`
  ${IconStyles}
`

const StyledIoClose = styled(IoClose)`
  ${IconStyles}
`

export default function Toggle({ isOpen, handleToggle }: ToggleProps) {
  return (
    <StyledToggle role="menuitem" tabIndex={0} onClick={handleToggle}>
      {isOpen ? <StyledIoClose /> : <StyledIoMenu />}
    </StyledToggle>
  )
}
