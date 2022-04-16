import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Roadmap from './Roadmap';

function App() {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="box-1">box 1</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: '#e99754' }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <div className="box-1">box 2</div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
