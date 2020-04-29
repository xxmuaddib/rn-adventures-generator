import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Wall1Bg from '../assets/images/wall1-bg.png';
import Wall1Blackboard from '../assets/images/wall1-blackboard.png';
import Wall1BlackboardMolecula from '../assets/images/wall1-blackboard-molecula.png';
import Wall1BlackboardMoleculaColors from '../assets/images/wall1-blackboard-molecula-colors.png';
import BlackboardSymbol from '../assets/images/blackboard-symbol.png';
import Wall1Death from '../assets/images/wall1-death.png';
import Wall1Floor from '../assets/images/wall1-floor.png';
import Wall1Table1 from '../assets/images/wall1-table1.png';
import Wall1Table2 from '../assets/images/wall1-table2.png';
import Wall1Chair from '../assets/images/wall1-chair.png';
import Wall1Virus1 from '../assets/images/wall1-virus1.png';
import Wall1Virus2 from '../assets/images/wall1-virus2.png';
import Wall1Virus3 from '../assets/images/wall1-virus3.png';
import DeathAvatar1 from '../assets/images/death-avatar1.png';
import PlagueWithHand from '../assets/images/plague-with-hand.png';
import CrownWithHand from '../assets/images/crown-with-hand.png';
import VirusRewardInventory from '../assets/images/virus-reward-inventory.png';

export const WALL1_SCENE = {
  name: 'Wall1',
  route: 'Wall1',
  bg: Wall1Bg,
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
        route: 'Wall4',
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
        route: 'Wall1Blackboard',
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
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: BlackboardSymbol,
          },
        },
        position: {
          x: 120,
          y: 20,
          width: 8,
          height: 8,
        },
        logical: {
          showOnResolved: ['slot1'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1BlackboardMolecula,
          },
        },
        position: {
          x: 135,
          y: 25,
          width: 100,
          height: 64,
        },
        logical: {
          showOnResolved: ['death-dialog-2'],
          hideOnResolved: ['slot1'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall1BlackboardMoleculaColors,
          },
        },
        position: {
          x: 135,
          y: 25,
          width: 100,
          height: 64,
        },
        logical: {
          showOnResolved: ['slot1'],
        },
      },
      {
        type: 'dialog',
        id: 'death-dialog',
        element: {
          type: 'image',
          image: {
            src: Wall1Death,
          },
        },
        position: {
          x: 50,
          y: 40,
          width: 50,
          height: 120,
        },
        logical: {
          hideOnResolved: ['plague-picture-puzzle'],
          dialogProperties: {
            character: {
              translations: {
                en:
                  'Hi class! I am your new teacher. They call me The Plague. Introduce yourselves, insects!',
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
                    en:
                      "Well, I don't have a name yet. But I am a fan of you... Can you teach me being as deadly as you are?",
                  },
                },
                character: {
                  translations: {
                    en:
                      "No, I am too old and I have Parkinson's... Unfortunately I remember not much of my previous days. But if you help me, then maybe I will help you...",
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
                        en: 'Well, what should I do then?',
                      },
                    },
                    character: {
                      translations: {
                        en:
                          "I don't know... But I just want to remember good ol' days",
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
                    drop: true,
                    resolve: 'dialog1',
                    setProgressOnResolved: 'plaguePictureShouldBeSolved',
                  },
                ],
              },
            ],
          },
        },
      },
      {
        type: 'dialog',
        id: 'death-dialog-2',
        element: {
          type: 'image',
          image: {
            src: Wall1Death,
          },
        },
        position: {
          x: 50,
          y: 40,
          width: 50,
          height: 120,
        },
        logical: {
          hideOnResolved: ['death-dialog-2'],
          showOnResolved: ['plague-picture-puzzle'],
          dialogProperties: {
            character: {
              translations: {
                en:
                  'Wow, thank you! You have some pottential, huh... Take this thing and put it on your corona.',
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
                    en: 'Wow! Thanks!',
                  },
                },
                character: {
                  translations: {
                    en: 'Bye bye.',
                  },
                },
                drop: true,
                resolve: 'death-dialog-2',
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
            src: PlagueWithHand,
          },
        },
        position: {
          x: 50,
          y: 40,
          width: 50,
          height: 120,
        },
        logical: {
          showOnResolved: ['death-dialog-2'],
        },
      },
      {
        type: 'collectable',
        id: 'crown-virus-part1',
        element: {
          type: 'image',
          image: {
            src: CrownWithHand,
            inventoryImage: VirusRewardInventory,
          },
        },
        position: {
          x: 75,
          y: 90,
          width: 20,
          height: 20,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['death-dialog-2'],
          countOfUse: 1,
        },
      },
      {
        type: 'dialog',
        id: 'death-dialog-3',
        element: {
          type: 'image',
          image: {
            src: Wall1Death,
          },
        },
        position: {
          x: 50,
          y: 40,
          width: 50,
          height: 120,
        },
        logical: {
          showOnResolved: ['collected-crown-virus-part1'],
          hideOnResolved: ['slot2'],
          dialogProperties: {
            character: {
              translations: {
                en:
                  "On the blackboard you can see the deadly molecula. There is a similar one somewhere in this room, but it's not finished. I think you could finish it.",
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
                    en: "Well, i'll try",
                  },
                },
                character: {
                  translations: {
                    en: 'Fly, little virus, fly. And make us proud!',
                  },
                },
                drop: true,
                resolve: 'death-dialog-3',
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
            src: PlagueWithHand,
          },
        },
        position: {
          x: 50,
          y: 40,
          width: 50,
          height: 120,
        },
        logical: {
          showOnResolved: ['slot2'],
        },
      },
      {
        type: 'collectable',
        id: 'crown-virus-part2',
        element: {
          type: 'image',
          image: {
            src: CrownWithHand,
            inventoryImage: VirusRewardInventory,
          },
        },
        position: {
          x: 75,
          y: 90,
          width: 20,
          height: 20,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['slot2'],
          countOfUse: 1,
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
        type: 'nav',
        route: 'Wall2',
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
        type: 'nav',
        route: 'Virus1',
        element: {
          type: 'image',
          image: {
            src: Wall1Virus1,
          },
        },
        position: {
          x: 40,
          y: 115,
          width: 55,
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
        route: 'Virus2',
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
        route: 'Virus3',
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
    ],
  },
};
