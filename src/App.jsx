import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const fade = useSpring({ opacity: clicked ? 0 : 1 });

  return (
    <>
      <button onClick={() => setClicked(!clicked)}>TEST FADE</button>
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
          <animated.div style={fade} className="box-1">
            box 1
          </animated.div>
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
