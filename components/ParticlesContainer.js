import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { Particles } from 'react-tsparticles';

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async ( engine ) => {
    await loadFull( engine );
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles 
      className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={ particlesInit }
      loaded={ particlesLoaded }
      options={{
        fullscreen: { enable: false },
        background: {
          color: {
            value: ''
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            }
          }
        },
      }} 
    />
  )
};

export default ParticlesContainer;