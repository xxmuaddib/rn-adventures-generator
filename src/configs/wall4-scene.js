import Wall4Bg from '../assets/images/wall4-bg.png';
import Wall4Door from '../assets/images/wall4-door.png';
import Wall4Picture1 from '../assets/images/wall4-picture1.png';
import BlankPicture from '../assets/images/blank-picture.png';
import Wall4Time from '../assets/images/wall4-time.png';

export const WALL4_SCENE = {
  name: 'Wall4',
  route: 'Wall4',
  bg: Wall4Bg,
  objects: {
    itemsMap: [
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
        type: 'nav',
        route: '',
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
        id: 'plaguePicture',
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
          expectedValue: ['picture-part1', 'picture-part2', 'picture-part3', 'picture-part4'],
          hideOnResolved: ['plaguePicture'],
        },
      },
      {
        type: 'nav',
        route: 'PlaguePictureScene',
        id: 'plaguePictureNav',
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
          showOnResolved: ['plaguePicture'],
        },
      },
      {
        type: 'nav',
        route: '',
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
