import SplashScreenBg from '../assets/images/splash-screen-bg.png';
import SplashAnimation from '../assets/animations/splash-animation.json';
import BgSound from '../assets/sounds/bg-sound.mp3';

export const SPLASH_SCREEN_SCENE = {
  name: 'SplashScreen',
  route: 'SplashScreen',
  type: 'splash',
  bg: SplashScreenBg,
  bgSound: BgSound,
  objects: {
    itemsMap: [
      {
        type: 'blank',
        element: {
          type: 'animatable',
          animation: {
            src: SplashAnimation,
            autoPlay: true,
            loop: false,
          },
        },
        position: {
          x: 5,
          y: 5,
          width: 195,
          height: 195,
        },
      },
    ],
  },
};
