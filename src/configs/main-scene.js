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
import GumWithKey from '../assets/images/gum-with-key.png';
import GreenKey from '../assets/images/green-key.png';

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
              src: Virus1Front,
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
              src: Virus2Front,
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
              src: Virus3Front,
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
          type: 'decorative',
          id: 'decorative1',
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
        // {
        //   type: 'nav',
        //   route: 'Wall1',
        //   element: {
        //     type: 'trigger',
        //   },
        //   position: {
        //     x: 0,
        //     y: 185,
        //     height: 15,
        //     width: 300,
        //   },
        // },
        {
          type: 'decorative',
          id: 'decorative2',
          element: {
            type: 'image',
            image: {
              src: GumWithKey,
            },
          },
          position: {
            x: 100,
            y: 175,
            width: 20,
            height: 20,
          },
          logical: {
            hideOnResolved: ['decorative2'],
          },
        },
        {
          type: 'collectable',
          id: 'collectable1',
          element: {
            type: 'image',
            image: {
              src: GreenKey,
            },
          },
          position: {
            x: 110,
            y: 185,
            width: 10,
            height: 10,
          },
          logical: {
            showOnResolved: ['decorative2'],
            countOfUse: 1,
          },
        },
      ],
    },
  },
];

const INITIAL_SCREEN = 'Wall1';

export { SCENES, INITIAL_SCREEN };
