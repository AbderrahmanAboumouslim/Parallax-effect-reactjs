import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from './assets/moon.png';
import dark from './assets/dark.jpg';
import giphy from './assets/giphy.gif';
// date
import moment from 'moment';
// countdown
import CountdownTimer from 'react-awesome-countdowntimer';

function App() {
  return (
    <div>
      <CountdownTimer endDate={moment('04/20/2022 23:29:00')} />
      {/* <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${dark})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={giphy} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.05}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2}>
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
}

export default App;
