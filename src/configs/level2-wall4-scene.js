import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Level2Wall4Bg from '../assets/images/level2-wall4-bg.png';
import Level2Wall4Door from '../assets/images/level2-wall4-door.png';
import Wall4Time from '../assets/images/wall4-time.png';
import PlaguePicture from '../assets/images/plague-picture.png';
import Wall4Picture1 from '../assets/images/wall4-picture1.png';
import SkeletonSpine from '../assets/images/skeleton-spine.png';
import SkeletonSpineInventory from '../assets/images/skeleton-spine-inventory.png';

export const LEVEL2_WALL4_SCENE = {
  name: 'Level2-wall4',
  route: 'Level2-wall4',
  bg: Level2Wall4Bg,
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
        route: 'Level2-wall3',
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
        route: 'Level2-wall1',
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
        type: 'nav',
        route: '',
        element: {
          type: 'image',
          image: {
            src: Level2Wall4Door,
          },
        },
        position: {
          x: 50,
          y: 39,
          width: 40,
          height: 115,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall4Picture1,
          },
        },
        position: {
          x: 120,
          y: 55,
          width: 35,
          height: 60,
        },
      },
      {
        id: 'plaguePictureFull',
        element: {
          type: 'image',
          image: {
            src: PlaguePicture,
          },
        },
        position: {
          x: 198,
          y: 55,
          width: 37,
          height: 63,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall4Time,
          },
        },
        position: {
          x: 160,
          y: 15,
          width: 30,
          height: 40,
        },
      },
      {
        type: 'collectable',
        id: 'skeleton-spine',
        element: {
          type: 'image',
          image: {
            src: SkeletonSpine,
            inventoryImage: SkeletonSpineInventory,
          },
        },
        position: {
          x: 173,
          y: 17,
          width: 4,
          height: 17,
        },
        logical: {
          countOfUse: 1,
        },
      },
    ],
  },
};
