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

import Farm2Bg from '../assets/images/farm2-bg.png';

import Farm3Bg from '../assets/images/farm3-bg.png';

import Farm4Bg from '../assets/images/farm4-bg.png';

import CityBg from '../assets/images/city-bg.png';

import University1Bg from '../assets/images/university1-bg.png';

import University2Bg from '../assets/images/university2-bg.png';

import University3Bg from '../assets/images/university3-bg.png';

import University4 from '../assets/images/university4.png';

import VirusesBg from '../assets/images/viruses-bg.png';
import Virus1Front from '../assets/images/virus1-front.png';
import Virus2Front from '../assets/images/virus2-front.png';
import Virus3Front from '../assets/images/virus3-front.png';
import VirusesTableFront from '../assets/images/viruses-table-front.png';

import Wall2Bg from '../assets/images/wall2-bg.png';
import Wall2Window1 from '../assets/images/wall2-window1.png';
import Wall2Window2 from '../assets/images/wall2-window2.png';
import Wall2Picture1 from '../assets/images/wall2-picture1.png';
import Wall2Picture2 from '../assets/images/wall2-picture2.png';
import Wall2Picture3 from '../assets/images/wall2-picture3.png';

import Wall3Bg from '../assets/images/wall3-bg.png';
import Wall3Skeleton from '../assets/images/wall3-skeleton.png';
import Wall3Mirror from '../assets/images/wall3-mirror.png';
import Wall3Rack from '../assets/images/wall3-rack.png';

import Wall4Bg from '../assets/images/wall4-bg.png';
import Wall4Door from '../assets/images/wall4-door.png';
import Wall4Picture1 from '../assets/images/wall4-picture1.png';
import Wall4Picture2 from '../assets/images/wall4-picture2.png';
import Wall4Time from '../assets/images/wall4-time.png';

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

const SCENES = [
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
    name: 'Farm2',
    route: 'Farm2',
    bg: Farm2Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm3',
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
    name: 'Farm3',
    route: 'Farm3',
    bg: Farm3Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm4',
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
    name: 'Farm4',
    route: 'Farm4',
    bg: Farm4Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'City',
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
    name: 'University1',
    route: 'University1',
    bg: University1Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University2',
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
    name: 'University2',
    route: 'University2',
    bg: University2Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University3',
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
    name: 'University3',
    route: 'University3',
    bg: University3Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University4',
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
    name: 'University4',
    route: 'University4',
    bg: University4,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Wall1',
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
    name: 'Wall2',
    route: 'Wall2',
    bg: Wall2Bg,
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
          route: 'Wall1',
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
              src: Wall2Window1,
            },
          },
          position: {
            x: 60,
            y: 30,
            width: 50,
            height: 100,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Window2,
            },
          },
          position: {
            x: 200,
            y: 30,
            width: 50,
            height: 100,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture1,
            },
          },
          position: {
            x: 120,
            y: 40,
            width: 30,
            height: 30,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture2,
            },
          },
          position: {
            x: 170,
            y: 60,
            width: 25,
            height: 30,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture3,
            },
          },
          position: {
            x: 135,
            y: 90,
            width: 30,
            height: 25,
          },
        },
        {
          type: 'nav',
          route: 'Wall3',
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
  },
  {
    name: 'Wall3',
    route: 'Wall3',
    bg: Wall3Bg,
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
          route: 'Wall2',
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
              src: Wall3Rack,
            },
          },
          position: {
            x: 50,
            y: 40,
            width: 50,
            height: 130,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall3Mirror,
            },
          },
          position: {
            x: 130,
            y: 40,
            width: 35,
            height: 70,
          },
        },
        {
          type: 'nav',
          element: {
            type: 'image',
            image: {
              src: Wall3Skeleton,
            },
          },
          position: {
            x: 200,
            y: 30,
            width: 30,
            height: 155,
          },
        },
        {
          type: 'nav',
          route: 'Wall4',
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
  },
  {
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
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall4Picture2,
            },
          },
          position: {
            x: 200,
            y: 55,
            width: 35,
            height: 60,
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
  },
  {
    name: 'Virus1',
    route: 'Virus1',
    bg: VirusesBg,
    objects: {
      itemsMap: [
        {
          type: 'dialog',
          id: 'dialog2',
          element: {
            type: 'image',
            image: {
              src: Virus1Front
            },
          },
          position: {
            x: 100,
            y: 5,
            width: 100,
            height: 150,
            zIndex: 1,
          },
          logical: {
            dialogProperties: {
              character: {
                translations: {
                  en: 'Ill kill your time',
                },
              },
            },
          },
        },
        {
          type: '',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFront,
            },
          },
          position: {
              x: 80,
              y: 80,
              width: 150,
              height: 100,
              zIndex: 2,
            },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
  {
    name: 'Virus2',
    route: 'Virus2',
    bg: VirusesBg,
    objects: {
      itemsMap: [
        {
          type: 'dialog',
          id: 'dialog2',
          element: {
            type: 'image',
            image: {
              src: Virus2Front
            },
          },
          position: {
            x: 100,
            y: 5,
            width: 100,
            height: 150,
            zIndex: 1,
          },
          logical: {
            dialogProperties: {
              character: {
                translations: {
                  en: 'Ill kill your time',
                },
              },
            },
          },
        },
        {
          type: '',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFront,
            },
          },
          position: {
              x: 80,
              y: 80,
              width: 150,
              height: 100,
              zIndex: 2,
            },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
  {
    name: 'Virus3',
    route: 'Virus3',
    bg: VirusesBg,
    objects: {
      itemsMap: [
        {
          type: 'dialog',
          id: 'dialog2',
          element: {
            type: 'image',
            image: {
              src: Virus3Front
            },
          },
          position: {
            x: 100,
            y: 5,
            width: 100,
            height: 150,
            zIndex: 1,
          },
          logical: {
            dialogProperties: {
              character: {
                translations: {
                  en: 'Ill kill your time',
                },
              },
            },
          },
        },
        {
          type: '',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFront,
            },
          },
          position: {
              x: 80,
              y: 80,
              width: 150,
              height: 100,
              zIndex: 2,
            },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
];

const INITIAL_SCREEN = 'Roof';

export { SCENES, INITIAL_SCREEN };
