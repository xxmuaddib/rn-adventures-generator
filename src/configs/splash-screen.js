import SplashScreenBg from '../assets/images/splash-screen-bg.png';
import SplashAnimation from '../assets/animations/splash-animation.json';

export const SPLASH_SCREEN_SCENE = {
  name: 'SplashScreen',
  route: 'SplashScreen',
  type: 'splash',
  bg: SplashScreenBg,
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
