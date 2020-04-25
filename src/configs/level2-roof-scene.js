import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';
import ArrowDown from '../assets/images/arrow-down.png';

import Level2RoofBg from '../assets/images/level2-roof-bg.png';
import Level2RoofMolecules from '../assets/images/level2-roof-molecules.png';

export const LEVEL2_ROOF_SCENE = {
  name: 'Level2-roof',
  route: 'Level2-roof',
  bg: Level2RoofBg,
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
          y: 2,
          width: 10,
          height: 10,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ArrowDown,
          },
        },
        position: {
          x: 145,
          y: 188,
          width: 10,
          height: 10,
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
          width: 30,
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
          x: 10,
          y: 0,
          width: 280,
          height: 15,
        },
      },
      {
        type: 'nav',
        route: 'Level2-wall4',
        element: {
          type: 'trigger',
        },
        position: {
          x: 270,
          y: 0,
          width: 30,
          height: 200,
        },
      },
      {
        type: 'nav',
        route: 'Level2-wall1',
        element: {
          type: 'trigger',
        },
        position: {
          x: 10,
          y: 185,
          width: 280,
          height: 15,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Level2RoofMolecules,
          },
        },
        position: {
          x: 55,
          y: 45,
          width: 180,
          height: 120,
        },
      },
    ],
  },
};
