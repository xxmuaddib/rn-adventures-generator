import ArrowDown from '../assets/images/arrow-down.png';

import ChemistryBg from '../assets/images/safe-bg.png';
import Level2Safe from '../assets/images/level2-safe.png';
import Symbol1 from '../assets/images/symbol1.png';
import Symbol2 from '../assets/images/symbol2.png';
import Symbol3 from '../assets/images/symbol3.png';
import Symbol4 from '../assets/images/symbol4.png';
import Symbol5 from '../assets/images/symbol5.png';
import Symbol6 from '../assets/images/symbol6.png';
import Symbol7 from '../assets/images/symbol7.png';
import Symbol8 from '../assets/images/symbol8.png';
import WaterCup from '../assets/images/water-cup.png';

export const LEVEL2_SAFE_SCENE = {
  name: 'Level2-safe',
  route: 'Level2-safe',
  bg: ChemistryBg,
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
        route: 'Level2-wall2',
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
            src: Level2Safe,
          },
        },
        position: {
          x: 158,
          y: 105,
          width: 90,
          height: 80,
        },
        logical: {
          hideOnResolved: ['slot3'],
        },
      },
      {
        type: 'slot',
        id: 'slot3_1',
        group: 'slot3',
        main: true,
        element: {
          type: 'image',
          image: {
            src: Symbol4,
          },
        },
        position: {
          x: 166,
          y: 149,
          width: 14,
          height: 18,
        },
        logical: {
          scenario: {
            slot3_1: 1,
            slot3_2: 2,
            slot3_3: 3,
            slot3_4: 4,
          },
          selected: 4,
          hideOnResolved: ['slot3'],
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Symbol1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Symbol2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Symbol3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Symbol4,
                },
              },
            },
            {
              id: 5,
              element: {
                type: 'image',
                image: {
                  src: Symbol5,
                },
              },
            },
            {
              id: 6,
              element: {
                type: 'image',
                image: {
                  src: Symbol6,
                },
              },
            },
            {
              id: 7,
              element: {
                type: 'image',
                image: {
                  src: Symbol7,
                },
              },
            },
            {
              id: 8,
              element: {
                type: 'image',
                image: {
                  src: Symbol8,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot3_2',
        group: 'slot3',
        element: {
          type: 'image',
          image: {
            src: Symbol6,
          },
        },
        position: {
          x: 186,
          y: 149,
          width: 14,
          height: 18,
        },
        logical: {
          selected: 6,
          hideOnResolved: ['slot3'],
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Symbol1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Symbol2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Symbol3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Symbol4,
                },
              },
            },
            {
              id: 5,
              element: {
                type: 'image',
                image: {
                  src: Symbol5,
                },
              },
            },
            {
              id: 6,
              element: {
                type: 'image',
                image: {
                  src: Symbol6,
                },
              },
            },
            {
              id: 7,
              element: {
                type: 'image',
                image: {
                  src: Symbol7,
                },
              },
            },
            {
              id: 8,
              element: {
                type: 'image',
                image: {
                  src: Symbol8,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot3_3',
        group: 'slot3',
        element: {
          type: 'image',
          image: {
            src: Symbol7,
          },
        },
        position: {
          x: 206,
          y: 149,
          width: 14,
          height: 18,
        },
        logical: {
          selected: 7,
          hideOnResolved: ['slot3'],
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Symbol1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Symbol2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Symbol3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Symbol4,
                },
              },
            },
            {
              id: 5,
              element: {
                type: 'image',
                image: {
                  src: Symbol5,
                },
              },
            },
            {
              id: 6,
              element: {
                type: 'image',
                image: {
                  src: Symbol6,
                },
              },
            },
            {
              id: 7,
              element: {
                type: 'image',
                image: {
                  src: Symbol7,
                },
              },
            },
            {
              id: 8,
              element: {
                type: 'image',
                image: {
                  src: Symbol8,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot3_4',
        group: 'slot3',
        element: {
          type: 'image',
          image: {
            src: Symbol1,
          },
        },
        position: {
          x: 226,
          y: 149,
          width: 14,
          height: 18,
        },
        logical: {
          selected: 1,
          hideOnResolved: ['slot3'],
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Symbol1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Symbol2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Symbol3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Symbol4,
                },
              },
            },
            {
              id: 5,
              element: {
                type: 'image',
                image: {
                  src: Symbol5,
                },
              },
            },
            {
              id: 6,
              element: {
                type: 'image',
                image: {
                  src: Symbol6,
                },
              },
            },
            {
              id: 7,
              element: {
                type: 'image',
                image: {
                  src: Symbol7,
                },
              },
            },
            {
              id: 8,
              element: {
                type: 'image',
                image: {
                  src: Symbol8,
                },
              },
            },
          ],
        },
      },
      {
        type: 'collectable',
        id: 'water-cup',
        element: {
          type: 'image',
          image: {
            src: WaterCup,
          },
        },
        position: {
          x: 195,
          y: 130,
          width: 20,
          height: 20,
        },
        logical: {
          showOnResolved: ['slot3'],
        },
      },
    ],
  },
};
