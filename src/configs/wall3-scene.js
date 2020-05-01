import Wall3Bg from '../assets/images/wall3-bg.png';
import Wall3Skeleton from '../assets/images/wall3-skeleton.png';
import Wall3Mirror from '../assets/images/wall3-mirror.png';
import Wall3Safe from '../assets/images/wall3-safe.png';
import Wall3SafeDoor1 from '../assets/images/wall3-safe-door1.png';
import Wall3SafeDoor2 from '../assets/images/wall3-safe-door2.png';
import Wall3Skull from '../assets/images/wall3-skull.png';
import ImagePart1 from '../assets/images/image-part1.png';
import PlagueImagePart1Inventory from '../assets/images/plague-picture-part1-inventory.png';
import Wall3Vase from '../assets/images/wall3-vase.png';
import SkeletonSkullBig from '../assets/images/skeleton-skull-big.png';
import SkeletonSkullInventory from '../assets/images/skeleton-skull-inventory.png';
import SkeletonArmBig from '../assets/images/skeleton-arm-big.png';
import SkeletonFootBig from '../assets/images/skeleton-foot-big.png';
import SkeletonSpineBig from '../assets/images/skeleton-spine-big.png';
import SkeletonFull from '../assets/images/skeleton-full.png';
import ImagePart4 from '../assets/images/image-part4.png';
import PlagueImagePart4Inventory from '../assets/images/plague-picture-part4-inventory.png';

import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

export const WALL3_SCENE = {
  name: 'Wall3',
  route: 'Wall3',
  bg: Wall3Bg,
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
        route: 'Roof',
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
        route: 'Wall2',
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
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall3Vase,
          },
        },
        position: {
          x: 68,
          y: 5,
          width: 13,
          height: 40,
          zIndex: 4,
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
        type: 'receiver',
        id: 'safe-door',
        element: {
          type: 'image',
          image: {
            src: Wall3SafeDoor1,
          },
        },
        position: {
          x: 54,
          y: 50,
          width: 42,
          height: 55,
          zIndex: 3,
        },
        logical: {
          expectedValue: ['safe-green-key'],
          hideOnResolved: ['safe-door'],
        },
      },
      {
        type: 'collectable',
        id: 'skeleton-skull',
        element: {
          type: 'image',
          image: {
            src: Wall3Skull,
            inventoryImage: SkeletonSkullInventory,
          },
        },
        position: {
          x: 68,
          y: 63,
          width: 15,
          height: 25,
          zIndex: 2,
        },
        logical: {
          countOfUse: 1,
        },
      },
      {
        type: 'decorative',
        id: 'safe-door2',
        element: {
          type: 'image',
          image: {
            src: Wall3SafeDoor2,
          },
        },
        position: {
          x: 54,
          y: 107,
          width: 42,
          height: 58,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: ['safe-door2'],
        },
      },
      {
        type: 'collectable',
        id: 'picture-part1',
        element: {
          type: 'image',
          image: {
            src: ImagePart1,
            inventoryImage: PlagueImagePart1Inventory,
          },
        },
        position: {
          x: 60,
          y: 135,
          width: 22,
          height: 18,
          zIndex: 1,
        },
        logical: {
          countOfUse: 1,
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
        type: 'collectable',
        id: 'picture-part4',
        element: {
          type: 'image',
          image: {
            src: ImagePart4,
            inventoryImage: PlagueImagePart4Inventory,
          },
        },
        position: {
          x: 162,
          y: 37,
          width: 10,
          height: 10,
        },
        logical: {
          countOfUse: 1,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall3Skeleton,
          },
        },
        position: {
          x: 200,
          y: 50,
          width: 35,
          height: 130,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: [
            'skeleton-foot-receiver',
            'skeleton-spine-receiver',
            'skeleton-arm-receiver',
            'skeleton-skull-receiver',
          ],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: SkeletonFull,
          },
        },
        position: {
          x: 196,
          y: 27,
          width: 40,
          height: 153,
        },
        logical: {
          showOnResolved: [
            'skeleton-foot-receiver',
            'skeleton-spine-receiver',
            'skeleton-arm-receiver',
            'skeleton-skull-receiver',
          ],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: SkeletonFootBig,
          },
        },
        position: {
          x: 219,
          y: 95,
          width: 8,
          height: 85,
        },
        logical: {
          showOnResolved: ['skeleton-foot-receiver'],
          hideOnResolved: [
            'skeleton-foot-receiver',
            'skeleton-spine-receiver',
            'skeleton-arm-receiver',
            'skeleton-skull-receiver',
          ],
        },
      },
      {
        type: 'receiver',
        id: 'skeleton-foot-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 213,
          y: 95,
          width: 15,
          height: 85,
        },
        logical: {
          expectedValue: ['skeleton-foot'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: SkeletonArmBig,
          },
        },
        position: {
          x: 196,
          y: 56,
          width: 10,
          height: 62,
        },
        logical: {
          showOnResolved: ['skeleton-arm-receiver'],
          hideOnResolved: [
            'skeleton-foot-receiver',
            'skeleton-spine-receiver',
            'skeleton-arm-receiver',
            'skeleton-skull-receiver',
          ],
        },
      },
      {
        type: 'receiver',
        id: 'skeleton-arm-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 191,
          y: 51,
          width: 15,
          height: 62,
        },
        logical: {
          expectedValue: ['skeleton-arm'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: SkeletonSkullBig,
          },
        },
        position: {
          x: 209,
          y: 28,
          width: 14,
          height: 20,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['skeleton-skull-receiver'],
          hideOnResolved: [
            'skeleton-foot-receiver',
            'skeleton-spine-receiver',
            'skeleton-arm-receiver',
            'skeleton-skull-receiver',
          ],
        },
      },
      {
        type: 'receiver',
        id: 'skeleton-skull-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 202,
          y: 25,
          width: 16,
          height: 20,
        },
        logical: {
          expectedValue: ['skeleton-skull'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: SkeletonSpineBig,
          },
        },
        position: {
          x: 212,
          y: 46,
          width: 8,
          height: 53,
          zIndex: 1,
        },
        logical: {
          showOnResolved: ['skeleton-spine-receiver'],
          hideOnResolved: [
            'skeleton-foot-receiver',
            'skeleton-spine-receiver',
            'skeleton-arm-receiver',
            'skeleton-skull-receiver',
          ],
        },
      },
      {
        type: 'receiver',
        id: 'skeleton-spine-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 208,
          y: 43,
          width: 15,
          height: 53,
        },
        logical: {
          expectedValue: ['skeleton-spine'],
        },
      },
      {
        type: 'nav',
        route: 'Wall4',
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
    ],
  },
};
