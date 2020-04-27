import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Level2Wall3Bg from '../assets/images/level2-wall3-bg.png';
import Level2Skeleton from '../assets/images/level2-skeleton.png';
import Wall3Safe from '../assets/images/wall3-safe.png';
import Wall3Mirror from '../assets/images/wall3-mirror.png';

export const LEVEL2_WALL3_SCENE = {
  name: 'Level2-wall3',
  bg: Level2Wall3Bg,
  route: 'Level2-wall3',
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
        route: 'Level2-wall2',
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
        route: 'Level2-wall4',
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
            src: Wall3Safe,
          },
        },
        position: {
          x: 50,
          y: 40,
          width: 50,
          height: 130,
        },
      },
      {
        type: 'nav',
        route: 'Mirror',
        element: {
          type: 'image',
          image: {
            src: Wall3Mirror,
          },
        },
        position: {
          x: 130,
          y: 40,
          width: 40,
          height: 60,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Level2Skeleton,
          },
        },
        position: {
          x: 196,
          y: 27,
          width: 40,
          height: 153,
        },
      },
    ],
  },
};
