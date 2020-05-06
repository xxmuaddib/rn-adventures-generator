import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Level2Wall1Bg from '../assets/images/level2-wall1-bg.png';
import Level2Wall1Teacher from '../assets/images/level2-teacher.png';
import Wall1Table1 from '../assets/images/wall1-table1.png';
import Wall1Table2 from '../assets/images/wall1-table2.png';
import Wall1Chair from '../assets/images/wall1-chair.png';
import Wall1Virus2 from '../assets/images/wall1-virus2.png';
import Wall1Virus3 from '../assets/images/wall1-virus3.png';
import Level2Virus3 from '../assets/images/level2-virus3.png';
import DeathAvatar1 from '../assets/images/death-avatar1.png';
import Wall1Blackboard from '../assets/images/wall1-blackboard.png';
import Virus3Blood from '../assets/images/virus3-blood.png';
import BloodInventory from '../assets/images/blood-inventory.png';
import Tooth from '../assets/images/tooth.png';

export const LEVEL2_WALL1_SCENE = {
  name: 'Level2-wall1',
  route: 'Level2-wall1',
  bg: Level2Wall1Bg,
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
        type: 'nav',
        route: 'Level2-wall4',
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
        type: 'dialog',
        id: 'wall2-teacher-dialog1',
        element: {
          type: 'image',
          image: {
            src: Level2Wall1Teacher,
          },
        },
        position: {
          x: 40,
          y: 40,
          width: 70,
          height: 120,
        },
        logical: {
          hideOnResolved: ['mirror-tooth'],
          dialogProperties: {
            character: {
              translations: {
                en: 'Tooth!',
              },
            },
            characterElement: {
              type: 'image',
              image: {
                src: DeathAvatar1,
              },
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            heroElement: {
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            dialog: [
              {
                hero: {
                  translations: {
                    en: 'Ok!',
                  },
                },
                drop: true,
                heroElement: {
                  bg: 'rgba(255, 255, 255, .8)',
                  color: 'rgb(0, 0, 0)',
                },
              },
            ],
          },
        },
      },
      {
        type: 'dialog',
        id: 'wall2-teacher-dialog2',
        element: {
          type: 'image',
          image: {
            src: Level2Wall1Teacher,
          },
        },
        position: {
          x: 40,
          y: 40,
          width: 70,
          height: 120,
        },
        logical: {
          showOnResolved: ['mirror-tooth'],
          hideOnResolved: ['mix-container-receiver'],
          dialogProperties: {
            character: {
              translations: {
                en: 'Skeleton!',
              },
            },
            characterElement: {
              type: 'image',
              image: {
                src: DeathAvatar1,
              },
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            heroElement: {
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            dialog: [
              {
                hero: {
                  translations: {
                    en: 'Ok!',
                  },
                },
                drop: true,
                heroElement: {
                  bg: 'rgba(255, 255, 255, .8)',
                  color: 'rgb(0, 0, 0)',
                },
              },
            ],
          },
        },
      },
      {
        type: 'dialog',
        id: 'wall2-teacher-dialog3',
        element: {
          type: 'image',
          image: {
            src: Level2Wall1Teacher,
          },
        },
        position: {
          x: 40,
          y: 40,
          width: 70,
          height: 120,
        },
        logical: {
          showOnResolved: ['mix-container-receiver'],
          dialogProperties: {
            character: {
              translations: {
                en: 'Lungs!',
              },
            },
            characterElement: {
              type: 'image',
              image: {
                src: DeathAvatar1,
              },
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            heroElement: {
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            dialog: [
              {
                hero: {
                  translations: {
                    en: 'Ok!',
                  },
                },
                drop: true,
                heroElement: {
                  bg: 'rgba(255, 255, 255, .8)',
                  color: 'rgb(0, 0, 0)',
                },
              },
            ],
          },
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Table1,
          },
        },
        position: {
          x: 170,
          y: 110,
          width: 90,
          height: 45,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Blackboard,
          },
        },
        position: {
          x: 110,
          y: 10,
          width: 145,
          height: 90,
        },
      },
      {
        type: 'nav',
        route: 'Level2-wall2',
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
            src: Wall1Table2,
          },
        },
        position: {
          x: 28,
          y: 140,
          width: 80,
          height: 50,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Chair,
          },
        },
        position: {
          x: 40,
          y: 180,
          width: 55,
          height: 20,
          zIndex: 2,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Table2,
          },
        },
        position: {
          x: 113,
          y: 145,
          width: 80,
          height: 50,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Chair,
          },
        },
        position: {
          x: 210,
          y: 180,
          width: 55,
          height: 20,
          zIndex: 2,
        },
      },
      {
        type: 'nav',
        route: 'Level2-virus2',
        element: {
          type: 'image',
          image: {
            src: Wall1Virus2,
          },
        },
        position: {
          x: 128,
          y: 118,
          width: 50,
          height: 80,
          zIndex: 1,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Table2,
          },
        },
        position: {
          x: 198,
          y: 145,
          width: 80,
          height: 50,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1Chair,
          },
        },
        position: {
          x: 125,
          y: 180,
          width: 55,
          height: 20,
          zIndex: 2,
        },
      },
      {
        type: 'nav',
        route: 'Level2-virus3',
        element: {
          type: 'image',
          image: {
            src: Wall1Virus3,
          },
        },
        position: {
          x: 210,
          y: 115,
          width: 55,
          height: 80,
          zIndex: 1,
        },
      },
      {
        type: 'nav',
        route: 'Level2-virus3',
        element: {
          type: 'image',
          image: {
            src: Level2Virus3,
          },
        },
        position: {
          x: 210,
          y: 115,
          width: 55,
          height: 80,
          zIndex: 1,
        },
        logical: {
          showOnResolved: ['level2-virus3'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Virus3Blood,
          },
        },
        position: {
          x: 214,
          y: 170,
          width: 30,
          height: 30,
          zIndex: 3,
        },
        logical: {
          showOnResolved: ['level2-virus3'],
          hideOnResolved: ['blood-should-hide'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Tooth,
          },
        },
        position: {
          x: 230,
          y: 190,
          width: 5,
          height: 5,
          zIndex: 4,
        },
        logical: {
          showOnResolved: ['level2-virus3'],
          hideOnResolved: ['tooth-should-hide'],
        },
      },
    ],
  },
};
