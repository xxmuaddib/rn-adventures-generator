import EmptyRoomWithClosedDoor from '../assets/images/EmptyRoomWithClosedDoor.png';
import Man from '../assets/images/Man.png';
import ManWithoutKey from '../assets/images/ManWithoutKey.png';
import backgroundSound from '../assets/sounds/scene1-bg-sound.mp3';
import DropingKeys from '../assets/sounds/dropingKeys.mp3';
import LockDoor from '../assets/sounds/doorLock.mp3';
import Key from '../assets/images/Key.png';
import ClosedDoor from '../assets/images/ClosedDoor.png';
import OpenDoor from '../assets/images/OpenDoor.png';
import watermelon from '../assets/animations/watermelon.json';
import CharacterAvatar1 from '../assets/images/CharacterAvatar1.png';
import CharacterAvatar2 from '../assets/images/CharacterAvatar2.png';
import HeroAvatar1 from '../assets/images/HeroAvatar1.png';
import HeroAvatar2 from '../assets/images/HeroAvatar2.png';
import HeroAvatar3 from '../assets/images/HeroAvatar3.png';
import HeroAvatar4 from '../assets/images/HeroAvatar4.png';
import HeroAvatar5 from '../assets/images/HeroAvatar5.png';
import HeroAvatar6 from '../assets/images/HeroAvatar6.png';
import HeroAvatar7 from '../assets/images/HeroAvatar7.png';
import HeroAvatar8 from '../assets/images/HeroAvatar8.png';

import Farm1Bg from '../assets/images/farm1-bg.png';
import Farm1Cow from '../assets/images/farm1-cow.png';

import Farm2Bg from '../assets/images/farm2-bg.png';
import Farm2Cow from '../assets/images/farm2-cow.png';

import Farm3Bg from '../assets/images/farm3-bg.png';
import Farm3Cow from '../assets/images/farm3-cow.png';

import Farm4Bg from '../assets/images/farm4-bg.png';
import Farm4Cow from '../assets/images/farm4-cow.png';
import Farm4Points from '../assets/images/farm4-points.png';

import CityBg from '../assets/images/city-bg.png';

import Wall1Bg from '../assets/images/wall1-bg.png';
import Wall1Blackboard from '../assets/images/wall1-blackboard.png';
import Wall1Death from '../assets/images/wall1-death.png';
import Wall1Floor from '../assets/images/wall1-floor.png';
import Wall1Table1 from '../assets/images/wall1-table1.png';

const SCENES = [
  {
    name: 'Main',
    route: 'Main',
    bg: EmptyRoomWithClosedDoor,
    bgSound: backgroundSound,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          id: 'nav1',
          route: 'Next',
          element: {
            type: 'image',
            image: {
              src: Key,
            },
          },
          position: {
            x: 20,
            y: 20,
            width: 50,
            height: 50,
          },
        },
        {
          type: 'blank',
          id: 'blank1',
          element: {
            type: 'image',
            image: {
              src: ManWithoutKey,
            },
          },
          position: {
            x: 50,
            y: 40,
            width: 50,
            height: 150,
          },
          logical: {
            showOnResolved: ['dialog1_1'],
          },
        },
        {
          type: 'dialog',
          id: 'dialog1',
          element: {
            type: 'image',
            image: {
              src: Man,
            },
          },
          position: {
            x: 50,
            y: 40,
            width: 50,
            height: 150,
          },
          logical: {
            hideOnResolved: ['dialog1_1'],
            dialogProperties: {
              character: {
                translations: {
                  en: 'Hello baby!!!',
                  ru: 'Привет, детка!',
                },
              },
              characterElement: {
                type: 'image',
                image: {
                  src: CharacterAvatar1,
                },
              },
              heroElement: {
                type: 'image',
                image: {
                  src: HeroAvatar1,
                },
              },
              dialog: [
                {
                  hero: {
                    translations: {
                      en:
                        'Hi, Give me the key, please!!! I need to go to toilet...',
                      ru:
                        'Привет, дай мне ключ, пожалуйста!!! Мне нужно в туалет...',
                    },
                  },
                  character: {
                    translations: {
                      en:
                        'No way, unless you give me the answer to the question of the universe!!!',
                      ru:
                        'Не дам, пока ты дашь ответ на главный вопрос вселенной!!!',
                    },
                  },
                  characterElement: {
                    type: 'image',
                    image: {
                      src: CharacterAvatar2,
                    },
                  },
                  heroElement: {
                    type: 'image',
                    image: {
                      src: HeroAvatar2,
                    },
                  },
                  dialog: [
                    {
                      hideOnResolved: ['dialog1_1'],
                      hero: {
                        translations: {
                          en: 'What is the question, ara?',
                          ru: 'И чо за вопрос, ара?',
                        },
                      },
                      character: {
                        translations: {
                          en:
                            "What a bad attitude. But I'll tell you if you promise to behave well, ara!",
                          ru:
                            'Что за неуважение? Если ты будешь хорошо себя вести, я может быть тебе его и задам, ара!',
                        },
                      },
                      characterElement: {
                        type: 'image',
                        image: {
                          src: CharacterAvatar1,
                        },
                      },
                      heroElement: {
                        type: 'image',
                        image: {
                          src: HeroAvatar3,
                        },
                      },
                      dialog: [
                        {
                          hero: {
                            translations: {
                              en: 'Ok, tell me please, your majesty.',
                              ru:
                                'Ладно... Ваше превосходительство, так какой же главный вопрос во вселенной?',
                            },
                          },
                          character: {
                            translations: {
                              en:
                                'What is the green thing that lives under the ground and eats stone?',
                              ru: 'Что зелёное, живёт под землёй и ест камни?',
                            },
                          },
                          characterElement: {
                            type: 'image',
                            image: {
                              src: CharacterAvatar1,
                            },
                          },
                          heroElement: {
                            type: 'image',
                            image: {
                              src: HeroAvatar4,
                            },
                          },
                          dialog: [
                            {
                              hero: {
                                translations: {
                                  en: 'The green underground stoneeater.',
                                  ru: 'Зеленый подземный камнеед.',
                                },
                              },
                              character: {
                                translations: {
                                  en: "Wow, you're a genius. Take the key.",
                                  ru: 'Вау, да ты - гений. Вот, держи ключ.',
                                },
                              },
                              characterElement: {
                                type: 'image',
                                image: {
                                  src: CharacterAvatar1,
                                },
                              },
                              heroElement: {
                                type: 'image',
                                image: {
                                  src: HeroAvatar5,
                                },
                              },
                              resolve: 'dialog1_1',
                            },
                            {
                              hero: {
                                translations: {
                                  en: 'Fish?..',
                                  ru: 'Рыба?..',
                                },
                              },
                              character: {
                                translations: {
                                  en: "You're a donk. A fish is never green.",
                                  ru: 'Рыба?..',
                                },
                              },
                              characterElement: {
                                type: 'image',
                                image: {
                                  src: CharacterAvatar1,
                                },
                              },
                              heroElement: {
                                type: 'image',
                                image: {
                                  src: HeroAvatar6,
                                },
                              },
                            },
                            {
                              hero: 'Doggy?...',
                              character:
                                'Get out of my sight, you crazy idiot!!!',
                              characterElement: {
                                type: 'image',
                                image: {
                                  src: CharacterAvatar1,
                                },
                              },
                              heroElement: {
                                type: 'image',
                                image: {
                                  src: HeroAvatar7,
                                },
                              },
                            },
                            {
                              hero: 'IBM Watson',
                              character:
                                'That could be true in another galaxy in a dream of a drunk ill elephant before dying because of diarea!!! GET OUT!!!',
                              characterElement: {
                                type: 'image',
                                image: {
                                  src: CharacterAvatar1,
                                },
                              },
                              heroElement: {
                                type: 'image',
                                image: {
                                  src: HeroAvatar8,
                                },
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      hero:
                        "I don't have time for this kind of games. I need to go to toilet!",
                      character:
                        "I don't care. The universe is in danger. Go and pee in another place.",
                      characterElement: {
                        type: 'image',
                        image: {
                          src: CharacterAvatar1,
                        },
                      },
                      heroElement: {
                        type: 'image',
                        image: {
                          src: HeroAvatar1,
                        },
                      },
                      dialog: [
                        {
                          hero: 'Why are you doing this?',
                          character: 'Because I am spiderman...',
                          characterElement: {
                            type: 'image',
                            image: {
                              src: CharacterAvatar1,
                            },
                          },
                          heroElement: {
                            type: 'image',
                            image: {
                              src: HeroAvatar1,
                            },
                          },
                        },
                      ],
                    },
                    {
                      hero:
                        "Listen, man... I don't who are you... But this is my house. Give me the key!!!",
                      character:
                        "It was your house until I came here. Now it's our house.",
                      characterElement: {
                        type: 'image',
                        image: {
                          src: CharacterAvatar1,
                        },
                      },
                      heroElement: {
                        type: 'image',
                        image: {
                          src: HeroAvatar1,
                        },
                      },
                      dialog: [
                        {
                          hero: 'I will call the police.',
                          character:
                            'Your bladder will explode by the time they come.',
                          characterElement: {
                            type: 'image',
                            image: {
                              src: CharacterAvatar1,
                            },
                          },
                          heroElement: {
                            type: 'image',
                            image: {
                              src: HeroAvatar1,
                            },
                          },
                          dialog: [
                            {
                              hero: "Maan... You're right",
                              character: 'Universe is always right...',
                              characterElement: {
                                type: 'image',
                                image: {
                                  src: CharacterAvatar1,
                                },
                              },
                              heroElement: {
                                type: 'image',
                                image: {
                                  src: HeroAvatar1,
                                },
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          type: 'collectable',
          id: 'collectable1',
          element: {
            type: 'image',
            image: {
              src: Key,
            },
          },
          position: {
            x: 52,
            y: 74,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['dialog1_1'],
            countOfUse: 1,
          },
          sound: DropingKeys,
        },
        {
          type: 'receiver',
          id: 'receiver1',
          element: {
            type: 'image',
            image: {
              src: ClosedDoor,
            },
          },
          position: {
            x: 110,
            y: 0,
            width: 131,
            height: 200,
            zIndex: 7,
          },
          logical: {
            expectedValue: 'collectable1',
            hideOnResolved: ['receiver1'],
          },
          sound: LockDoor,
        },
        {
          type: 'receiver',
          id: 'receiver2',
          element: {
            type: 'image',
            image: {
              src: OpenDoor,
            },
          },
          position: {
            x: 110,
            y: 0,
            width: 131,
            height: 200,
            zIndex: 5,
          },
          logical: {
            expectedValue: 'collectable2',
            showOnResolved: ['receiver1'],
          },
        },
        {
          type: 'receiver',
          id: 'receiver3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 120,
            y: 20,
            width: 200,
            height: 200,
          },
          logical: {
            expectedValue: 'draggable1',
          },
        },
        {
          type: 'draggable',
          id: 'draggable1',
          element: {
            type: 'animatable',
            animation: {
              src: watermelon,
              autoPlay: true,
            },
          },
          position: {
            x: 80,
            y: 40,
            width: 50,
            height: 150,
            zIndex: 5,
          },
          logical: {},
        },
        {
          type: 'receiver',
          id: 'receiver4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 120,
            y: 20,
            width: 100,
            height: 100,
          },
          logical: {
            expectedValue: 'puzzle1',
          },
        },
        {
          type: 'draggable',
          id: 'puzzle1',
          group: 'puzzle',
          element: {
            type: 'image',
            image: {
              src: Key,
            },
          },
          position: {
            x: 80,
            y: 200,
            width: 15,
            height: 30,
            zIndex: 5,
          },
          logical: {
            hideOnResolved: ['puzzle'],
          },
        },
        {
          type: 'receiver',
          id: 'receiver5',
          element: {
            type: 'trigger',
          },
          position: {
            x: 120,
            y: 20,
            width: 100,
            height: 100,
          },
          logical: {
            expectedValue: 'puzzle2',
          },
        },
        {
          type: 'draggable',
          id: 'puzzle2',
          group: 'puzzle',
          element: {
            type: 'image',
            image: {
              src: Key,
            },
          },
          position: {
            x: 120,
            y: 200,
            width: 15,
            height: 30,
            zIndex: 5,
          },
          logical: {},
        },
        {
          type: 'sequence',
          id: 'sequence1_1',
          group: 'sequence1',
          main: true,
          element: {
            type: 'animatable',
            animation: {
              src: watermelon,
              autoPlay: true,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 20,
            height: 20,
            zIndex: 10,
          },
          logical: {
            scenario: [
              'sequence1_2',
              'sequence1_1',
              'sequence1_2',
              'sequence1_3',
            ],
          },
        },
        {
          type: 'sequence',
          id: 'sequence1_2',
          group: 'sequence1',
          element: {
            type: 'animatable',
            animation: {
              src: watermelon,
              autoPlay: true,
            },
          },
          position: {
            x: 120,
            y: 80,
            width: 20,
            height: 20,
            zIndex: 20,
          },
        },
        {
          type: 'sequence',
          id: 'sequence1_3',
          group: 'sequence1',
          element: {
            type: 'animatable',
            animation: {
              src: watermelon,
              autoPlay: true,
            },
          },
          position: {
            x: 160,
            y: 80,
            width: 20,
            height: 20,
            zIndex: 30,
          },
        },
        {
          type: 'slot',
          id: 'slot1_1',
          group: 'slot1',
          main: true,
          element: {
            type: 'animatable',
            animation: {
              src: watermelon,
              autoPlay: true,
            },
          },
          position: {
            x: 200,
            y: 120,
            width: 15,
            height: 30,
            zIndex: 30,
          },
          logical: {
            scenario: {
              slot1_1: 2,
              slot1_2: 1,
            },
            selected: 1,
            options: [
              {
                id: 1,
                element: {
                  type: 'animatable',
                  animation: {
                    src: watermelon,
                    autoPlay: true,
                  },
                },
              },
              {
                id: 2,
                element: {
                  type: 'image',
                  image: {
                    src: Key,
                  },
                },
              },
            ],
          },
        },
        {
          type: 'slot',
          id: 'slot1_2',
          group: 'slot1',
          element: {
            type: 'image',
            image: {
              src: Key,
            },
          },
          position: {
            x: 200,
            y: 80,
            width: 15,
            height: 30,
            zIndex: 30,
          },
          logical: {
            selected: 2,
            options: [
              {
                id: 1,
                element: {
                  type: 'animatable',
                  animation: {
                    src: watermelon,
                    autoPlay: true,
                  },
                },
              },
              {
                id: 2,
                element: {
                  type: 'image',
                  image: {
                    src: Key,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Farm1',
    route: 'Farm1',
    bg: Farm1Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm2',
          element: {
            type: 'image',
            image: {
              src: Farm1Cow,
            },
          },
          position: {
            x: 200,
            y: 100,
            width: 90,
            height: 100,
          },
        },
      ],
    },
  },
  {
    name: 'Farm2',
    route: 'Farm2',
    bg: Farm2Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm3',
          element: {
            type: 'image',
            image: {
              src: Farm2Cow,
            },
          },
          position: {
            x: 115,
            y: 15,
            width: 170,
            height: 190,
          },
        },
      ],
    },
  },
  {
    name: 'Farm3',
    route: 'Farm3',
    bg: Farm3Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm4',
          element: {
            type: 'image',
            image: {
              src: Farm3Cow,
            },
          },
          position: {
            x: 20,
            y: 20,
            width: 270,
            height: 180,
          },
        },
      ],
    },
  },
  {
    name: 'Farm4',
    route: 'Farm4',
    bg: Farm4Bg,
    objects: {
      itemsMap: [
        {
          type: 'receiver',
          element: {
            type: 'image',
            image: {
              src: Farm4Cow,
            },
          },
          position: {
            x: 0,
            y: 10,
            width: 300,
            height: 190,
          },
        },
        {
          type: 'nav',
          route: 'City',
          element: {
            type: 'image',
            image: {
              src: Farm4Points,
            },
          },
          position: {
            x: 90,
            y: 90,
            width: 20,
            height: 30,
          },
        },
      ],
    },
  },
  {
    name: 'City',
    route: 'City',
    bg: CityBg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'Wall1',
    route: 'Wall1',
    bg: Wall1Bg,
    objects: {
      itemsMap: [
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
            y: 20,
            width: 145,
            height: 100,
          },
        },
        {
          type: 'dialog',
          element: {
            type: 'image',
            image: {
              src: Wall1Death,
            },
          },
          position: {
            x: 55,
            y: 50,
            width: 40,
            height: 130,
          },
        },
        {
          type: 'receiver',
          element: {
            type: 'image',
            image: {
              src: Wall1Table1,
            },
          },
          position: {
            x: 160,
            y: 130,
            width: 90,
            height: 50,
          },
        },
      ],
    },
  },
];

const INITIAL_SCREEN = 'Farm1';

export { SCENES, INITIAL_SCREEN };
