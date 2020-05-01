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
import Level2Cabinet from '../assets/images/level2-cabinet.png';
import Level2Rack from '../assets/images/level2-rack.png';
import Match from '../assets/images/match.png';
import MatchInventory from '../assets/images/match-inventory.png';
import Knife from '../assets/images/knife.png';
import KnifeInventory from '../assets/images/knife-inventory.png';
import EmptyChemicalContainers from '../assets/images/empty-chemical-containers.png';
import Level2Safe from '../assets/images/level2-safe.png';

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
          y: 5,
          width: 25,
          height: 30,
          zIndex: 1,
        },
      },
      {
        type: 'nav',
        route: 'Level2-safe',
        element: {
          type: 'image',
          image: {
            src: Level2Safe,
          },
        },
        position: {
          x: 171,
          y: 37,
          width: 24,
          height: 25,
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
      {
        type: 'nav',
        route: 'Chemistry',
        element: {
          type: 'image',
          image: {
            src: EmptyChemicalContainers,
          },
        },
        position: {
          x: 127,
          y: 81,
          height: 30,
          width: 53,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Level2Cabinet,
          },
        },
        position: {
          x: 125,
          y: 110,
          width: 58,
          height: 71,
          zIndex: 1,
        },
      },
      {
        type: 'collectable',
        id: 'match',
        element: {
          type: 'image',
          image: {
            src: Match,
            inventoryImage: MatchInventory,
          },
        },
        position: {
          x: 138,
          y: 121,
          width: 10,
          height: 10,
          zIndex: 2,
        },
        logical: {
          countOfUse: 1,
        },
      },
      {
        type: 'decorative',
        id: 'level2-cabinet-rack1',
        element: {
          type: 'image',
          image: {
            src: Level2Rack,
          },
        },
        position: {
          x: 131,
          y: 117,
          width: 23,
          height: 19,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: ['level2-cabinet-rack1'],
        },
      },
      {
        type: 'decorative',
        id: 'level2-cabinet-rack2',
        element: {
          type: 'image',
          image: {
            src: Level2Rack,
          },
        },
        position: {
          x: 154,
          y: 158,
          width: 23,
          height: 20,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: ['level2-cabinet-rack2'],
        },
      },
      {
        type: 'collectable',
        id: 'level2-knife',
        element: {
          type: 'image',
          image: {
            src: Knife,
            inventoryImage: KnifeInventory,
          },
        },
        position: {
          x: 158,
          y: 162,
          width: 16,
          height: 12,
          zIndex: 2,
        },
        logical: {
          countOfUse: 1,
        },
      },
    ],
  },
};
