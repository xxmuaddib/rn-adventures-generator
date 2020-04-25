import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Wall2Bg from '../assets/images/wall2-bg.png';
import Wall2Window1 from '../assets/images/wall2-window1.png';
import Wall2Window2 from '../assets/images/wall2-window2.png';
import Wall2Picture1 from '../assets/images/wall2-picture1.png';
import Wall2Picture2 from '../assets/images/wall2-picture2.png';
import Wall2Picture3Flipped from '../assets/images/wall2-picture3-flipped.png';
import Level2Wall2Bg from '../assets/images/level2-wall2-bg.png';

export const LEVEL2_WALL2_SCENE = {
  name: 'Level2-wall2',
  route: 'Level2-wall2',
  bg: Level2Wall2Bg,
  objects: {
    itemsMap: [
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ArrowRight,
          },
        },
        position: {
          x: 284,
          y: 95,
          width: 10,
          height: 10,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ArrowLeft,
          },
        },
        position: {
          x: 5,
          y: 95,
          width: 10,
          height: 10,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ArrowUp,
          },
        },
        position: {
          x: 145,
          y: 3,
          width: 10,
          height: 10,
        },
      },
      {
        type: 'nav',
        route: 'Level2-roof',
        element: {
          type: 'trigger',
        },
        position: {
          x: 35,
          y: 0,
          width: 232,
          height: 20,
        },
      },
      {
        type: 'nav',
        route: 'Level2-wall1',
        element: {
          type: 'trigger',
        },
        position: {
          x: 0,
          y: 0,
          width: 35,
          height: 200,
        },
      },
      {
        type: 'nav',
        route: 'Level2-wall3',
        element: {
          type: 'trigger',
        },
        position: {
          x: 265,
          y: 0,
          width: 35,
          height: 200,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Window1,
          },
        },
        position: {
          x: 60,
          y: 30,
          width: 50,
          height: 100,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Window2,
          },
        },
        position: {
          x: 200,
          y: 30,
          width: 50,
          height: 100,
          zIndex: 4,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Picture1,
          },
        },
        position: {
          x: 120,
          y: 10,
          width: 30,
          height: 30,
          zIndex: 1,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Picture2,
          },
        },
        position: {
          x: 170,
          y: 20,
          width: 25,
          height: 30,
          zIndex: 1,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Picture3Flipped,
          },
        },
        position: {
          x: 135,
          y: 45,
          width: 34,
          height: 40,
        },
      },
    ],
  },
};
