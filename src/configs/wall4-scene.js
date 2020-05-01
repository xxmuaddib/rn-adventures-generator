import Wall4Bg from '../assets/images/wall4-bg.png';
import Wall4Door from '../assets/images/wall4-door.png';
import Wall4Picture1 from '../assets/images/wall4-picture1.png';
import BlankPicture from '../assets/images/blank-picture.png';
import Wall4Time from '../assets/images/wall4-time.png';
import SkeletonSpine from '../assets/images/skeleton-spine.png';
import SkeletonSpineInventory from '../assets/images/skeleton-spine-inventory.png';
import ImagePart5 from '../assets/images/image-part5.png';
import PlagueImagePart5Inventory from '../assets/images/plague-picture-part5-inventory.png';
import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';
import PlaguePicture from '../assets/images/plague-picture.png';
import PuzzleImagePart1 from '../assets/images/puzzle-image-part1.png';
import PuzzleImagePart2 from '../assets/images/puzzle-image-part2.png';
import PuzzleImagePart3 from '../assets/images/puzzle-image-part3.png';
import PuzzleImagePart4 from '../assets/images/puzzle-image-part4.png';
import PuzzleImagePart5 from '../assets/images/puzzle-image-part5.png';

export const WALL4_SCENE = {
  name: 'Wall4',
  route: 'Wall4',
  bg: Wall4Bg,
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
        route: 'Wall3',
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
        route: '',
        element: {
          type: 'image',
          image: {
            src: Wall4Door,
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
        type: 'receiver',
        id: 'plague-picture-parts',
        element: {
          type: 'image',
          image: {
            src: BlankPicture,
          },
        },
        position: {
          x: 200,
          y: 55,
          width: 35,
          height: 60,
        },
        logical: {
          expectedValue: [
            'picture-part1',
            'picture-part2',
            'picture-part3',
            'picture-part4',
            'picture-part5',
          ],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'nav',
        route: 'PlaguePictureScene',
        id: 'plaguePictureNav',
        element: {
          type: 'trigger',
        },
        position: {
          x: 200,
          y: 55,
          width: 35,
          height: 60,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['plague-picture-parts'],
          hideOnResolved: ['plague-picture-puzzle'],
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
        logical: {
          showOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: PuzzleImagePart1,
          },
        },
        position: {
          x: 205,
          y: 64,
          width: 16,
          height: 14,
        },
        logical: {
          showOnResolved: ['plague-picture-parts-picture-part3'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: PuzzleImagePart2,
          },
        },
        position: {
          x: 221,
          y: 60,
          width: 11,
          height: 22,
        },
        logical: {
          showOnResolved: ['plague-picture-parts-picture-part5'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: PuzzleImagePart3,
          },
        },
        position: {
          x: 203,
          y: 75,
          width: 16,
          height: 20,
        },
        logical: {
          showOnResolved: ['plague-picture-parts-picture-part2'],
          hideOnResolved: ['plauge-picture-puzzle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: PuzzleImagePart4,
          },
        },
        position: {
          x: 221,
          y: 85,
          width: 10,
          height: 15,
        },
        logical: {
          showOnResolved: ['plague-picture-parts-picture-part4'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: PuzzleImagePart5,
          },
        },
        position: {
          x: 206,
          y: 97,
          width: 25,
          height: 10,
        },
        logical: {
          showOnResolved: ['plague-picture-parts-picture-part1'],
          hideOnResolved: ['plague-picture-puzzle'],
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
        id: 'picture-part5',
        element: {
          type: 'image',
          image: {
            src: ImagePart5,
            inventoryImage: PlagueImagePart5Inventory,
          },
        },
        position: {
          x: 184,
          y: 18,
          width: 6,
          height: 8,
        },
        logical: {
          countOfUse: 1,
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
      {
        type: 'nav',
        route: 'Wall1',
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
