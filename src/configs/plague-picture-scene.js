import PlaguePictureBg from '../assets/images/plague-picture-bg.png';
import ImagePart1Large from '../assets/images/image-part1-large.png';
import ImagePart2Large from '../assets/images/image-part2-large.png';
import ImagePart3Large from '../assets/images/image-part3-large.png';
import ImagePart4Large from '../assets/images/image-part4-large.png';
import ImagePart5Large from '../assets/images/image-part5-large.png';
import PlaguePicture from '../assets/images/plague-picture.png';
import ArrowDown from '../assets/images/arrow-down.png';

export const PLAGUE_PICTURE_SCENE = {
  name: 'PlaguePictureScene',
  route: 'PlaguePictureScene',
  bg: PlaguePictureBg,
  objects: {
    itemsMap: [
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
        route: 'Wall4',
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
        type: 'receiver',
        id: 'image-part1-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 108,
          y: 105,
          width: 70,
          height: 68,
        },
        logical: {
          expectedValue: ['image-part1-large'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part2-receiver',
        element: {
          type: 'trigger',
        },
        position: {
		  x: 100,
          y: 60,
          width: 65,
          height: 68,
        },
        logical: {
          expectedValue: ['image-part2-large'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part3-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 108,
          y: 20,
          width: 60,
          height: 60,
        },
        logical: {
          expectedValue: ['image-part3-large'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part4-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 142,
          y: 80,
          width: 65,
          height: 65,
        },
        logical: {
          expectedValue: ['image-part4-large'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part5-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 145,
          y: 20,
          width: 60,
          height: 67,
        },
        logical: {
          expectedValue: ['image-part5-large'],
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'draggable',
        id: 'image-part1-large',
        group: 'plague-picture-puzzle',
        element: {
          type: 'image',
          image: {
            src: ImagePart1Large,
          },
        },
        position: {
          x: 20,
          y: 20,
          width: 85,
          height: 55,
          zIndex: 1,
        },
        logical: {
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'draggable',
        id: 'image-part2-large',
        group: 'plague-picture-puzzle',
        element: {
          type: 'image',
          image: {
            src: ImagePart2Large,
          },
        },
        position: {
          x: 30,
          y: 80,
          width: 53,
          height: 65,
          zIndex: 1,
        },
        logical: {
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'draggable',
        id: 'image-part3-large',
        group: 'plague-picture-puzzle',
        element: {
          type: 'image',
          image: {
            src: ImagePart3Large,
          },
        },
        position: {
          x: 25,
          y: 140,
          width: 60,
          height: 40,
          zIndex: 1,
        },
        logical: {
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'draggable',
        id: 'image-part4-large',
        group: 'plague-picture-puzzle',
        element: {
          type: 'image',
          image: {
            src: ImagePart4Large,
          },
        },
        position: {
          x: 240,
          y: 50,
          width: 38,
          height: 60,
          zIndex: 1,
        },
        logical: {
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'draggable',
        id: 'image-part5-large',
        group: 'plague-picture-puzzle',
        element: {
          type: 'image',
          image: {
            src: ImagePart5Large,
          },
        },
        position: {
          x: 230,
          y: 130,
          width: 40,
          height: 58,
          zIndex: 1,
        },
        logical: {
          hideOnResolved: ['plague-picture-puzzle'],
        },
      },
      {
        type: 'blank',
        id: 'plague-picture-full',
        element: {
          type: 'image',
          image: {
            src: PlaguePicture,
          },
        },
        position: {
          x: 96,
          y: 12,
          width: 121,
          height: 192,
          zIndex: 1,
        },
        logical: {
          showOnResolved: ['plague-picture-puzzle'],
        },
      },
    ],
  },
};
