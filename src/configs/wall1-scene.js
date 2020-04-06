import Wall1Bg from '../assets/images/wall1-bg.png';
import Wall1Blackboard from '../assets/images/wall1-blackboard.png';
import Wall1Death from '../assets/images/wall1-death.png';
import Wall1Floor from '../assets/images/wall1-floor.png';
import Wall1Table1 from '../assets/images/wall1-table1.png';
import Wall1Table2 from '../assets/images/wall1-table2.png';
import Wall1Chair from '../assets/images/wall1-chair.png';
import Wall1Virus1 from '../assets/images/wall1-virus1.png';
import Wall1Virus2 from '../assets/images/wall1-virus2.png';
import Wall1Virus3 from '../assets/images/wall1-virus3.png';
import DeathAvatar1 from '../assets/images/death-avatar1.png';

export const WALL1_SCENE = {
  name: 'Wall1',
  route: 'Wall1',
  bg: Wall1Bg,
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
        type: 'dialog',
        id: 'dialog1',
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
          dialogProperties: {
            character: {
              translations: {
                en: 'Hi class! I am your new teacher. They call me The Plague. Introduce yourselves, insects!',
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
                    en: "Well, I don't have a name yet. But I am a fan of you... Can you teach me being as deadly as you are?",
                  },
                },
                character: {
                  translations: {
                    en: 'No, I am too old and I have Parkinson\'s... Unfortunately I remember not much of my previous days. But if you help me, then maybe I will help you...',
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
                        en: 'I don\'t know... But I just want to remember good ol\' days',
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
        type: 'nav',
        route: '',
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
        type: 'nav',
        route: '',
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
        type: 'nav',
        route: '',
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
        type: 'nav',
        route: '',
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
        type: 'nav',
        route: '',
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
        type: 'nav',
        route: '',
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
        type: 'nav',
        route: '',
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
