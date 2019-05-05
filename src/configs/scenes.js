const SCENES = [
  {
    name: 'Main',
    bg: 'https://i.stack.imgur.com/Qu5vI.png',
    objects: {
      navMap: [{
        x: 50,
        y: 30,
        width: 80,
        height: 40,
        route: 'Next',
      }],
      itemsMap: [{
        x: 200,
        y: 170,
        width: 20,
        height: 20,
        name: 'C',
        id: 'collectable1',
        collectable: true,
      },
      {
        x: 240,
        y: 100,
        width: 20,
        height: 20,
        name: 'A',
        multiple: ['A', 'C', 'D', 'I', 'N'],
        correct: 'C',
        id: 'group1_1',
        group: 'group1',
      },
      {
        x: 260,
        y: 100,
        width: 20,
        height: 20,
        name: 'Y',
        multiple: ['Y', 'A', 'R'],
        correct: 'A',
        id: 'group1_2',
        group: 'group1',
      },
      {
        x: 280,
        y: 100,
        width: 20,
        height: 20,
        name: 'Q',
        multiple: ['Q', 'E', 'T'],
        correct: 'T',
        id: 'group1_3',
        group: 'group1',
      }],
      dialogButtonsMap: [],
    },
  },
  {
    name: 'Next',
    bg: 'https://user-images.githubusercontent.com/5445906/41290571-ecc1438c-6e6a-11e8-91c2-2a4ec0cf812c.jpg',
    objects: {
      navMap: [{
        x: 80,
        y: 80,
        width: 80,
        height: 40,
        route: 'Main',
      }],
      itemsMap: [],
      dialogButtonsMap: [],
    },
  },
];

const INITIAL_SCREEN = 'Main';

export { SCENES, INITIAL_SCREEN };
