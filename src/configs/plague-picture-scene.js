import PlaguePictureBg from '../assets/images/plague-picture-bg.png';
import ImagePart1Large from '../assets/images/image-part1-large.png';
import ImagePart2Large from '../assets/images/image-part2-large.png';
import ImagePart3Large from '../assets/images/image-part3-large.png';
import ImagePart4Large from '../assets/images/image-part4-large.png';
import ImagePart5Large from '../assets/images/image-part5-large.png';

export const PLAGUE_PICTURE_SCENE = {
  name: 'PlaguePictureScene',
  route: 'PlaguePictureScene',
  bg: PlaguePictureBg,
  objects: {
    itemsMap: [
      {
        type: 'receiver',
        id: 'image-part1-receiver',
        element: {
          type: 'image',
          image: {
            src: PlaguePictureBg,
          },
        },
        position: {
          x: 100,
          y: 100,
          width: 20,
          height: 20,
        },
        logical: {
          expectedValue: ['image-part1-large'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part2-receiver',
        element: {
          type: 'image',
          image: {
            src: PlaguePictureBg,
          },
        },
        position: {
          x: 150,
          y: 150,
          width: 10,
          height: 10,
        },
        logical: {
          expectedValue: ['image-part2-large'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part3-receiver',
        element: {
          type: 'image',
          image: {
            src: PlaguePictureBg,
          },
        },
        position: {
          x: 50,
          y: 100,
          width: 10,
          height: 10,
        },
        logical: {
          expectedValue: ['image-part3-large'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part4-receiver',
        element: {
          type: 'image',
          image: {
            src: PlaguePictureBg,
          },
        },
        position: {
          x: 70,
          y: 90,
          width: 10,
          height: 10,
        },
        logical: {
          expectedValue: ['image-part4-large'],
        },
      },
      {
        type: 'receiver',
        id: 'image-part5-receiver',
        element: {
          type: 'image',
          image: {
            src: PlaguePictureBg,
          },
        },
        position: {
          x: 150,
          y: 40,
          width: 10,
          height: 10,
        },
        logical: {
          expectedValue: ['image-part1-large'],
        },
      },
      {
        type: 'draggable',
        id: 'image-part1-large',
        group: 'plague-picture-images',
        element: {
          type: 'image',
          image: {
            src: ImagePart1Large,
          },
        },
        position: {
          x: 20,
          y: 20,
          width: 60,
          height: 60,
          zIndex: 1,
        },
      },
      {
        type: 'draggable',
        id: 'image-part2-large',
        group: 'plague-picture-images',
        element: {
          type: 'image',
          image: {
            src: ImagePart2Large,
          },
        },
        position: {
          x: 30,
          y: 80,
          width: 50,
          height: 50,
          zIndex: 1,
        },
      },
      {
        type: 'draggable',
        id: 'image-part3-large',
        group: 'plague-picture-images',
        element: {
          type: 'image',
          image: {
            src: ImagePart3Large,
          },
        },
        position: {
          x: 25,
          y: 140,
          width: 50,
          height: 50,
          zIndex: 1,
        },
      },
      {
        type: 'draggable',
        id: 'image-part4-large',
        group: 'plague-picture-images',
        element: {
          type: 'image',
          image: {
            src: ImagePart4Large,
          },
        },
        position: {
          x: 240,
          y: 50,
          width: 50,
          height: 50,
          zIndex: 1,
        },
      },
      {
        type: 'draggable',
        id: 'image-part5-large',
        group: 'plague-picture-images',
        element: {
          type: 'image',
          image: {
            src: ImagePart5Large,
          },
        },
        position: {
          x: 230,
          y: 130,
          width: 50,
          height: 50,
          zIndex: 1,
        },
      },
    ],
  },
};
