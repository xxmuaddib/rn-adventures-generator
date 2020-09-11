import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';

import Wall2Window1 from '../assets/images/wall2-window1.png';
import Wall2Picture1 from '../assets/images/wall2-picture1.png';
import Wall2Picture2 from '../assets/images/wall2-picture2.png';
import Wall2Picture3Flipped from '../assets/images/wall2-picture3-flipped.png';
import Level2Wall2Bg from '../assets/images/level2-wall2-bg.png';
import Level2Cabinet from '../assets/images/level2-cabinet.png';
import Level2Rack from '../assets/images/level2-rack.png';
import Match from '../assets/images/match.png';
import MatchInventory from '../assets/images/match-inventory.png';
import Knife from '../assets/images/knife.png';
import KnifeInventory from '../assets/images/knife-inventory.png';
import EmptyChemicalContainers from '../assets/images/empty-chemical-containers.png';
import Level2Safe from '../assets/images/level2-safe.png';
import Window2WithoutFoot from '../assets/images/window2-without-foot.png';
import Candle from '../assets/images/candle.png';
import CandleFired from '../assets/images/candle-fired.png';
import ChemicalContainers from '../assets/images/chemical-containers.png';
import ChemicalContainerSmall from '../assets/images/chemical-container-small.png';
import WaterContainer from '../assets/images/water-container.png';
import WaterContainerInventory from '../assets/images/water-container-inventory.png';
import WaterContainerFull from '../assets/images/water-container-full.png';
import BloodContainerFull from '../assets/images/blood-container-full.png';
import WaterChemicalContainerSmall from '../assets/images/water-chemical-container-small.png';
import BloodChemicalContainerSmall from '../assets/images/blood-chemical-container-small.png';
import Wall2Window2 from '../assets/images/wall2-window2.png';
import Wall2Window2Opened from '../assets/images/wall2-window2-opened.png';
import Wall2Foot from '../assets/images/wall2-foot.png';
import SkeletonFootInventory from '../assets/images/skeleton-foot-inventory.png';
import Rain from '../assets/animations/rain.json';
import Level2Window2Opened from '../assets/images/level2-window2-opened.png';
import EmptyChemicalContainerMixBig from '../assets/images/empty-chemical-container-mix-big.png';
import ChemicalContainerMixBig from '../assets/images/chemical-container-mix-big.png';
import MixSmallContainer from '../assets/images/mix-small-container.png';

import WindowOpen from '../assets/sounds/window-open.wav';
import Level2CabinetDoorOpen from '../assets/sounds/level2-cabinet-door-open.wav';
import KnifeCollect from '../assets/sounds/knife-collect.wav';
import GlassRing from '../assets/sounds/glass-ring.mp3';
import MatchCollect from '../assets/sounds/match-collect.wav';
import WaterFilling from '../assets/sounds/water-filling.wav';
import SkeletonPartsCollect from '../assets/sounds/skeleton-parts-collect.wav';

export const LEVEL2_WALL2_SCENE = {
  name: 'Level2-wall2',
  route: 'Level2-wall2',
  bg: Level2Wall2Bg,
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
          y: 3,
          width: 10,
          height: 10,
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
        type: 'nav',
        route: 'Level2-wall1',
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
        route: 'Level2-wall3',
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
        type: 'decorative',
        id: 'wandow2-closed',
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
          zIndex: 5,
        },
        logical: {
          hideOnResolved: ['wandow2-closed'],
        },
        sound: WindowOpen,
      },
      {
        type: 'blank',
        id: 'rain',
        element: {
          type: 'animatable',
          animation: {
            src: Rain,
            loop: true,
            autoPlay: true,
          },
        },
        position: {
          x: 205,
          y: 38,
          width: 5,
          height: 82,
          zIndex: 4,
        },
      },
      {
        type: 'receiver',
        id: 'rain-receiver',
        element: {
          type: 'trigger',
        },
        position: {
          x: 203,
          y: 36,
          width: 44,
          height: 87,
          zIndex: 3,
        },
        logical: {
          expectedValue: ['empty-water-container', 'blood-container'],
          resolveIfAnyExist: true,
        },
        sound: WaterFilling,
      },
      {
        type: 'collectable',
        id: 'water-container',
        element: {
          type: 'image',
          image: {
            src: WaterContainerFull,
          },
        },
        position: {
          x: 234,
          y: 108,
          width: 10,
          height: 15,
          zIndex: 6,
        },
        logical: {
          showOnResolved: ['rain-receiver'],
          countOfUse: 1,
        },
        sound: GlassRing,
      },
      {
        type: 'decorative',
        id: 'window2-opened',
        element: {
          type: 'image',
          image: {
            src: Level2Window2Opened,
          },
        },
        position: {
          x: 190,
          y: 25,
          width: 70,
          height: 105,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['wandow2-closed'],
        },
      },
      {
        type: 'collectable',
        id: 'skeleton-foot',
        element: {
          type: 'image',
          image: {
            src: Wall2Foot,
            inventoryImage: SkeletonFootInventory,
          },
        },
        position: {
          x: 221,
          y: 35,
          width: 8,
          height: 85,
          zIndex: 4,
        },
        logical: {
          showOnResolved: ['wandow2-closed'],
          hideOnResolved: ['skeleton-foot-receiver'],
          countOfUse: 1,
        },
        sound: SkeletonPartsCollect,
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Picture1,
          },
        },
        position: {
          x: 120,
          y: 10,
          width: 30,
          height: 30,
          zIndex: 1,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Picture2,
          },
        },
        position: {
          x: 170,
          y: 5,
          width: 25,
          height: 30,
          zIndex: 1,
        },
      },
      {
        type: 'nav',
        route: 'Level2-safe',
        element: {
          type: 'image',
          image: {
            src: Level2Safe,
          },
        },
        position: {
          x: 171,
          y: 37,
          width: 24,
          height: 25,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Wall2Picture3Flipped,
          },
        },
        position: {
          x: 135,
          y: 45,
          width: 34,
          height: 40,
        },
      },
      {
        type: 'nav',
        route: 'Chemistry',
        element: {
          type: 'image',
          image: {
            src: ChemicalContainers,
          },
        },
        position: {
          x: 127,
          y: 81,
          width: 53,
          height: 30,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Candle,
          },
        },
        position: {
          x: 134,
          y: 99,
          width: 5,
          height: 5,
        },
        logical: {
          hideOnResolved: ['candle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: CandleFired,
          },
        },
        position: {
          x: 134,
          y: 99,
          width: 5,
          height: 5,
        },
        logical: {
          showOnResolved: ['candle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: EmptyChemicalContainerMixBig,
          },
        },
        position: {
          x: 133,
          y: 87,
          width: 7,
          height: 11,
        },
        logical: {
          hideOnResolved: ['water-receiver', 'blood-receiver', 'candle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ChemicalContainerMixBig,
          },
        },
        position: {
          x: 133,
          y: 87,
          width: 7,
          height: 11,
        },
        logical: {
          showOnResolved: ['water-receiver', 'blood-receiver', 'candle'],
          hideOnResolved: ['hide-water-blood-mix'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: BloodChemicalContainerSmall,
          },
        },
        position: {
          x: 149,
          y: 90,
          width: 2,
          height: 9,
        },
        logical: {
          showOnResolved: ['blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: WaterChemicalContainerSmall,
          },
        },
        position: {
          x: 151,
          y: 90,
          width: 2,
          height: 9,
        },
        logical: {
          showOnResolved: ['water-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: WaterContainerFull,
          },
        },
        position: {
          x: 167,
          y: 86,
          width: 8,
          height: 13,
        },
        logical: {
          showOnResolved: ['water-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: MixSmallContainer,
          },
        },
        position: {
          x: 150,
          y: 101,
          width: 2,
          height: 8,
        },
        logical: {
          showOnResolved: ['water-receiver', 'blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: BloodContainerFull,
          },
        },
        position: {
          x: 159,
          y: 88,
          width: 8,
          height: 11,
        },
        logical: {
          showOnResolved: ['blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: Level2Cabinet,
          },
        },
        position: {
          x: 125,
          y: 110,
          width: 58,
          height: 71,
          zIndex: 1,
        },
      },
      {
        type: 'collectable',
        id: 'match',
        element: {
          type: 'image',
          image: {
            src: Match,
            inventoryImage: MatchInventory,
          },
        },
        position: {
          x: 138,
          y: 121,
          width: 10,
          height: 10,
          zIndex: 2,
        },
        logical: {
          countOfUse: 1,
        },
        sound: MatchCollect,
      },
      {
        type: 'decorative',
        id: 'level2-cabinet-rack1',
        element: {
          type: 'image',
          image: {
            src: Level2Rack,
          },
        },
        position: {
          x: 131,
          y: 117,
          width: 23,
          height: 19,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: ['level2-cabinet-rack1'],
        },
        sound: Level2CabinetDoorOpen,
      },
      {
        type: 'decorative',
        id: 'level2-cabinet-rack3',
        element: {
          type: 'image',
          image: {
            src: Level2Rack,
          },
        },
        position: {
          x: 155,
          y: 117,
          width: 22,
          height: 19,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: ['level2-cabinet-rack3'],
        },
        sound: Level2CabinetDoorOpen,
      },
      {
        type: 'collectable',
        id: 'empty-water-container',
        element: {
          type: 'image',
          image: {
            src: WaterContainer,
            inventoryImage: WaterContainerInventory,
          },
        },
        position: {
          x: 160,
          y: 120,
          width: 10,
          height: 15,
          zIndex: 2,
        },
        logical: {
          countOfUse: 1,
        },
        sound: GlassRing,
      },
      {
        type: 'decorative',
        id: 'level2-cabinet-rack2',
        element: {
          type: 'image',
          image: {
            src: Level2Rack,
          },
        },
        position: {
          x: 155,
          y: 158,
          width: 22,
          height: 19,
          zIndex: 3,
        },
        logical: {
          hideOnResolved: ['level2-cabinet-rack2'],
        },
        sound: Level2CabinetDoorOpen,
      },
      {
        type: 'collectable',
        id: 'level2-knife',
        element: {
          type: 'image',
          image: {
            src: Knife,
            inventoryImage: KnifeInventory,
          },
        },
        position: {
          x: 158,
          y: 162,
          width: 16,
          height: 12,
          zIndex: 2,
        },
        logical: {
          countOfUse: 1,
        },
        sound: KnifeCollect,
      },
    ],
  },
};
