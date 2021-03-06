import Particles from 'react-tsparticles'

export default function Background() {
  return (
    <Particles
      options={{
        background: {
          image: '-webkit-radial-gradient(bottom, #10181f, #00020d)',
        },
        fullScreen: {
          zIndex: -1,
        },
        particles: {
          color: {
            value: '#ffcb74',
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            outModes: { default: 'out' },
            random: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
            },
            value: 160,
          },
          opacity: {
            random: true,
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: true,
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0,
              startValue: 'min',
            },
          },
        },
      }}
    />
  )
}
