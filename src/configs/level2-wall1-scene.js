import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Level2Wall1Bg from '../assets/images/level2-wall1-bg.png';
import Level2Wall1Teacher from '../assets/images/level2-teacher.png';
import Teacher2WithHand from '../assets/images/teacher2-with-hand.png';
import Teacher2Crown1 from '../assets/images/teacher2-crown1.png';
import Wall1Table1 from '../assets/images/wall1-table1.png';
import Wall1Table2 from '../assets/images/wall1-table2.png';
import Wall1Chair from '../assets/images/wall1-chair.png';
import Wall1Virus2 from '../assets/images/wall1-virus2.png';
import Wall1Virus3 from '../assets/images/wall1-virus3.png';
import Level2Virus3 from '../assets/images/level2-virus3.png';
import SpanishFluAvatar from '../assets/images/spanish-flu-avatar.png';
import Wall1Blackboard from '../assets/images/wall1-blackboard.png';
import Virus3Blood from '../assets/images/virus3-blood.png';
import BloodInventory from '../assets/images/blood-inventory.png';
import Tooth from '../assets/images/tooth.png';
import HeroAvatar from '../assets/images/hero-avatar.png';
import VirusRewardInventory from '../assets/images/virus-reward-inventory.png';

import Correct from '../assets/sounds/correct.mp3';

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
                en:
                  "The plague was of a very high opinion of you... But I look at your face, and I see you can't be deadly...",
              },
            },
            characterElement: {
              type: 'image',
              image: {
                src: SpanishFluAvatar,
              },
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            heroElement: {
              type: 'image',
              image: {
                src: HeroAvatar,
              },
              bg: 'rgba(131, 146, 130, .8)',
              color: 'rgb(255, 255, 255)',
            },
            dialog: [
              {
                hero: {
                  translations: {
                    en: 'What do you mean, teacher?',
                  },
                },
                character: {
                  translations: {
                    en:
                      "Any self-respecting virus should be able to nibble. If you can't do that, then I can't help you.",
                  },
                },
                characterElement: {
                  type: 'image',
                  image: {
                    src: SpanishFluAvatar,
                  },
                  bg: 'rgba(255, 255, 255, .8)',
                  color: 'rgb(0, 0, 0)',
                },
                heroElement: {
                  type: 'image',
                  image: {
                    src: HeroAvatar,
                  },
                  bg: 'rgba(131, 146, 130, .8)',
                  color: 'rgb(255, 255, 255)',
                },
                dialog: [
                  {
                    hero: {
                      translations: {
                        en: 'I will nibble, teacher. Believe me!',
                      },
                    },
                    character: {
                      translations: {
                        en: "Don't return before that, nothingness!",
                      },
                    },
                    drop: true,
                    resolve: 'wall2-teacher-dialog1',
                    characterElement: {
                      type: 'image',
                      image: {
                        src: SpanishFluAvatar,
                      },
                      bg: 'rgba(255, 255, 255, .8)',
                      color: 'rgb(0, 0, 0)',
                    },
                    heroElement: {
                      type: 'image',
                      image: {
                        src: HeroAvatar,
                      },
                      bg: 'rgba(131, 146, 130, .8)',
                      color: 'rgb(255, 255, 255)',
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        type: 'collectable',
        id: 'crown-virus-part4',
        element: {
          type: 'image',
          image: {
            src: Teacher2Crown1,
            inventoryImage: VirusRewardInventory,
          },
        },
        position: {
          x: 80,
          y: 120,
          width: 20,
          height: 20,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['mirror-tooth'],
          countOfUse: 1,
        },
        sound: Correct,
      },
      {
        type: 'blank',
        id: 'wall2-teacher-blank',
        element: {
          type: 'image',
          image: {
            src: Teacher2WithHand,
          },
        },
        position: {
          x: 40,
          y: 40,
          width: 70,
          height: 120,
        },
        logical: {
          hideOnResolved: ['collected-crown-virus-part4'],
          showOnResolved: ['mirror-tooth'],
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
          showOnResolved: ['collected-crown-virus-part4'],
          hideOnResolved: ['mix-container-receiver'],
          dialogProperties: {
            character: {
              translations: {
                en:
                  'Now I can see, you will stop at nothing. Great! Now you need to train. There is a skeleton in this classroom. But it is not ready. Can you fix it?',
              },
            },
            characterElement: {
              type: 'image',
              image: {
                src: SpanishFluAvatar,
              },
              bg: 'rgba(255, 255, 255, .8)',
              color: 'rgb(0, 0, 0)',
            },
            heroElement: {
              type: 'image',
              image: {
                src: HeroAvatar,
              },
              bg: 'rgba(131, 146, 130, .8)',
              color: 'rgb(255, 255, 255)',
            },
            dialog: [
              {
                hero: {
                  translations: {
                    en: 'Yes, of course, my teacher!',
                  },
                },
                character: {
                  translations: {
                    en: 'Come back quickly!',
                  },
                },
                drop: true,
                heroElement: {
                  type: 'image',
                  image: {
                    src: HeroAvatar,
                  },
                  bg: 'rgba(131, 146, 130, .8)',
                  color: 'rgb(255, 255, 255)',
                },
              },
            ],
          },
        },
      },
      {
        type: 'collectable',
        id: 'crown-virus-part5',
        element: {
          type: 'image',
          image: {
            src: Teacher2Crown1,
            inventoryImage: VirusRewardInventory,
          },
        },
        position: {
          x: 80,
          y: 120,
          width: 20,
          height: 20,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['mix-container-receiver'],
          countOfUse: 1,
        },
        sound: Correct,
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Teacher2WithHand,
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
          hideOnResolved: ['collected-crown-virus-part5'],
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
          showOnResolved: ['collected-crown-virus-part5'],
          dialogProperties: {
            character: {
              translations: {
                en: 'Lungs!',
              },
            },
            characterElement: {
              type: 'image',
              image: {
                src: SpanishFluAvatar,
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
                character: {
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
