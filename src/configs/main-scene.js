import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';
import ArrowDown from '../assets/images/arrow-down.png';

import Farm1Bg from '../assets/images/farm1-bg.png';

import Farm4Bg from '../assets/images/farm4-bg.png';

import CityBg from '../assets/images/city-bg.png';

import University1Bg from '../assets/images/university1-bg.png';

import University3Bg from '../assets/images/university3-bg.png';

import University4 from '../assets/images/university4.png';

import VirusesBg from '../assets/images/viruses-bg.png';
import Virus1Front from '../assets/images/virus1-front.png';
import Virus2Front from '../assets/images/virus2-front.png';
import Virus3Front from '../assets/images/virus3-front.png';
import VirusesTableFront from '../assets/images/viruses-table-front.png';
import VirusesTableFrontPart1 from '../assets/images/viruses-table-front-part1.png';
import VirusesTableFrontPart2 from '../assets/images/viruses-table-front-part2.png';
import GumWithKey from '../assets/images/gum-with-key.png';
import Gum from '../assets/images/gum.png';
import GreenKey from '../assets/images/green-key.png';
import GreenKeyInventory from '../assets/images/green-key-inventory.png';
import ImagePart2 from '../assets/images/image-part2.png';
import PlagueImagePart2Inventory from '../assets/images/plague-picture-part2-inventory.png';
import KeysCollect from '../assets/sounds/keys-collect.wav';

import Virus2Image from '../assets/images/virus2-image.png';
import SkeletonArmInventory from '../assets/images/skeleton-arm-inventory.png';

import Wall2Bg from '../assets/images/wall2-bg.png';
import Wall2Window1 from '../assets/images/wall2-window1.png';
import Wall2Window2 from '../assets/images/wall2-window2.png';
import Wall2Window2Opened from '../assets/images/wall2-window2-opened.png';
import Wall2Foot from '../assets/images/wall2-foot.png';
import Wall2Picture1 from '../assets/images/wall2-picture1.png';
import Wall2Picture2 from '../assets/images/wall2-picture2.png';
import Wall2Picture3 from '../assets/images/wall2-picture3.png';
import Wall2Picture3Flipped from '../assets/images/wall2-picture3-flipped.png';
import Wall2Arm from '../assets/images/skeleton-arm.png';
import ImagePart3 from '../assets/images/image-part3.png';
import Level2Virus2Bg from '../assets/images/level2-virus2-bg.png';
import ImagePart3Inventory from '../assets/images/image-part3-inventory.png';

import MirrorSceneBackground from '../assets/images/mirror-scene-bg.png';
import MirrorSceneMirror from '../assets/images/mirror-scene-mirror.png';
import CrownPart1 from '../assets/images/crown-part1.png';
import CrownPart2 from '../assets/images/crown-part2.png';
import CrownPart3 from '../assets/images/crown-part3.png';
import CrownPart4 from '../assets/images/crown-part4.png';
import CrownPart5 from '../assets/images/crown-part5.png';

import TreeBg from '../assets/images/tree-bg.png';
import TreeImage from '../assets/images/tree-image.png';
import TreeImageZoomed from '../assets/images/tree-image-zoomed.png';
import Level2MirrorBackground from '../assets/images/level2-mirror-bg.png';
import Virus3Blood from '../assets/images/virus3-blood.png';
import SkeletonFootInventory from '../assets/images/skeleton-foot-inventory.png';
import BloodContainerFull from '../assets/images/blood-container-full.png';
import Tooth from '../assets/images/tooth.png';
import VirusRewardInventory from '../assets/images/virus-reward-inventory.png';
import ToothInventory from '../assets/images/tooth-inventory.png';
import HeroAvatar from '../assets/images/hero-avatar.png';
import LungPoint from '../assets/images/lung-point.png';
import LungSequence from '../assets/images/lung-sequence.png';
import LungSequenceRight from '../assets/images/lung-sequence-right.png';
import Lung4 from '../assets/images/lung4.png';
import Lung5 from '../assets/images/lung5.png';
import Lung6 from '../assets/images/lung6.png';
import Lung7 from '../assets/images/lung7.png';
import Lung8 from '../assets/images/lung8.png';
import LungsBranches from '../assets/sounds/lungs-branches.wav';
import Lung8Virus from '../assets/images/lung8-virus.png';
import Lung8VirusCover from '../assets/images/lung8-virus-cover.png';
import Լevel3MirrorBg from '../assets/images/level3-mirror-bg.png';
import Level3_1Bg from '../assets/images/level3-1-bg.png';
import Level3_1Mirror from '../assets/images/level3-1-mirror.png';
import Level3_1Catapult from '../assets/images/level3-1-catapult.png';
import Level3_2 from '../assets/images/level3-2.png';
import AimBg from '../assets/images/aim-bg.png';
import Aim1 from '../assets/images/aim1.png';
import Aim2 from '../assets/images/aim2.png';
import Aim3 from '../assets/images/aim3.png';
import Aim4 from '../assets/images/aim4.png';
import Level3_3 from '../assets/images/level3-3.png';
import Level3_4 from '../assets/images/level3-4.png';
import Level3_5 from '../assets/images/level3-5.png';
import Level3_6 from '../assets/images/level3-6.png';
import Level3_7 from '../assets/images/level3-7.png';
import Level3_8 from '../assets/images/level3-8.png';
import Level3_9 from '../assets/images/level3-9.png';

import SkeletonPartsCollect from '../assets/sounds/skeleton-parts-collect.wav';
import Paper from '../assets/sounds/paper.wav';
import GumFalling from '../assets/sounds/gum-falling.mp3';
import WindowOpen from '../assets/sounds/window-open.wav';
import WaterFilling from '../assets/sounds/water-filling.wav';
import Correct from '../assets/sounds/correct.mp3';
import GlassRing from '../assets/sounds/glass-ring.mp3';
import Cut from '../assets/sounds/cut.wav';
import BgSound from '../assets/sounds/bg-sound.mp3';

const SCENES = [
  {
    name: 'Farm1',
    route: 'Farm1',
    bgSound: BgSound,
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
            zIndex: 4,
          },
          logical: {
            hideOnResolved: ['wandow2-closed'],
          },
          sound: WindowOpen,
        },
        {
          type: 'decorative',
          id: 'window2-opened',
          element: {
            type: 'image',
            image: {
              src: Wall2Window2Opened,
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
            zIndex: 3,
          },
          logical: {
            showOnResolved: ['wandow2-closed'],
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
            y: 20,
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
            y: 30,
            width: 25,
            height: 30,
            zIndex: 1,
          },
        },
        {
          type: 'collectable',
          id: 'skeleton-arm',
          element: {
            type: 'image',
            image: {
              src: Wall2Arm,
              inventoryImage: SkeletonArmInventory,
            },
          },
          position: {
            x: 128,
            y: 35,
            width: 5,
            height: 40,
            zIndex: 3,
          },
          logical: {
            countOfUse: 1,
            resolveOnCollect: ['decorative-picture'],
          },
          sound: SkeletonPartsCollect,
        },
        {
          type: 'blank',
          id: 'picture3',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture3,
            },
          },
          position: {
            x: 125,
            y: 70,
            width: 30,
            height: 25,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['decorative-picture'],
          },
        },
        {
          type: 'blank',
          id: 'picture3-flipped',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture3Flipped,
            },
          },
          position: {
            x: 135,
            y: 70,
            width: 34,
            height: 40,
          },
          logical: {
            showOnResolved: ['decorative-picture'],
          },
        },
        {
          type: 'collectable',
          id: 'picture-part3',
          element: {
            type: 'image',
            image: {
              src: ImagePart3,
              inventoryImage: ImagePart3Inventory,
            },
          },
          position: {
            x: 124,
            y: 76,
            width: 5,
            height: 8,
            zIndex: 1,
          },
          logical: {
            countOfUse: 1,
          },
          sound: Paper,
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
    name: 'Mirror',
    route: 'Mirror',
    bg: MirrorSceneBackground,
    objects: {
      itemsMap: [
        {
          type: 'receiver',
          id: 'mirror',
          element: {
            type: 'image',
            image: {
              src: MirrorSceneMirror,
            },
          },
          position: {
            x: 90,
            y: 15,
            width: 120,
            height: 170,
          },
          logical: {
            expectedValue: [
              'crown-virus-part1',
              'crown-virus-part2',
              'crown-virus-part3',
              'crown-virus-part4',
              'crown-virus-part5',
              'tooth',
            ],
          },
          sound: Correct,
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart1,
            },
          },
          position: {
            x: 120,
            y: 48,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part1'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart2,
            },
          },
          position: {
            x: 130,
            y: 42,
            width: 16,
            height: 16,
            zIndex: 2,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part2'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart3,
            },
          },
          position: {
            x: 144,
            y: 36,
            width: 18,
            height: 18,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part3'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart4,
            },
          },
          position: {
            x: 160,
            y: 44,
            width: 17,
            height: 17,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part4'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart5,
            },
          },
          position: {
            x: 171,
            y: 50,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part5'],
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
            x: 147,
            y: 159,
            width: 8,
            height: 8,
          },
          logical: {
            showOnResolved: ['mirror-tooth'],
          },
        },
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
          route: 'Wall3',
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
    name: 'Mirror2',
    route: 'Mirror2',
    bg: Level2MirrorBackground,
    objects: {
      itemsMap: [
        {
          type: 'receiver',
          id: 'mirror',
          element: {
            type: 'image',
            image: {
              src: MirrorSceneMirror,
            },
          },
          position: {
            x: 90,
            y: 15,
            width: 120,
            height: 170,
          },
          logical: {
            expectedValue: [
              'crown-virus-part1',
              'crown-virus-part2',
              'crown-virus-part3',
              'crown-virus-part4',
              'crown-virus-part5',
              'tooth',
            ],
          },
          sound: Correct,
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart1,
            },
          },
          position: {
            x: 120,
            y: 48,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part1'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart2,
            },
          },
          position: {
            x: 130,
            y: 42,
            width: 16,
            height: 16,
            zIndex: 2,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part2'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart3,
            },
          },
          position: {
            x: 144,
            y: 36,
            width: 18,
            height: 18,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part3'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart4,
            },
          },
          position: {
            x: 160,
            y: 44,
            width: 17,
            height: 17,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part4'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart5,
            },
          },
          position: {
            x: 171,
            y: 50,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part5'],
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
            x: 147,
            y: 159,
            width: 8,
            height: 8,
          },
          logical: {
            showOnResolved: ['mirror-tooth'],
          },
        },
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
          route: 'Level2-wall3',
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
    name: 'Virus1',
    route: 'Virus1',
    bg: VirusesBg,
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
          type: 'dialog',
          id: 'virus1-dialog',
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
              characterElement: {
                type: 'image',
                image: {
                  src: Virus1Front,
                },
                bg: 'rgba(255, 255, 255, .8)',
                color: 'rgb(0, 0, 0)',
              },
              character: {
                translations: {
                  en:
                    "The Plague is too mean to me. She says, that I am a bad student. She says that an eye can't be deadly and they are going to deduct me.",
                },
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
                  heroElement: {
                    type: 'image',
                    image: {
                      src: HeroAvatar,
                    },
                    bg: 'rgba(131, 146, 130, .8)',
                    color: 'rgb(255, 255, 255)',
                  },
                  hero: {
                    translations: {
                      en: 'I hope everything will be ok.',
                    },
                  },
                  characterElement: {
                    type: 'image',
                    image: {
                      src: Virus1Front,
                    },
                    bg: 'rgba(255, 255, 255, .8)',
                    color: 'rgb(0, 0, 0)',
                  },
                  character: {
                    translations: {
                      en: 'You reassured me, thanks!',
                    },
                  },
                  drop: true,
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
              src: VirusesTableFront,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 150,
            height: 100,
            zIndex: 1,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
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
          type: 'dialog',
          id: 'virus2-dialog',
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
              characterElement: {
                type: 'image',
                image: {
                  src: Virus2Front,
                },
                bg: 'rgba(255, 255, 255, .8)',
                color: 'rgb(0, 0, 0)',
              },
              character: {
                translations: {
                  en:
                    "They say, that trees are like lungs... I'm looking at this photo and can't understand how. Can you take a look?",
                },
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
                  heroElement: {
                    type: 'image',
                    image: {
                      src: HeroAvatar,
                    },
                    bg: 'rgba(131, 146, 130, .8)',
                    color: 'rgb(255, 255, 255)',
                  },
                  hero: {
                    translations: {
                      en:
                        "Well, i may take a look. But that's a strange assumption",
                    },
                  },
                  characterElement: {
                    type: 'image',
                    image: {
                      src: Virus2Front,
                    },
                    bg: 'rgba(255, 255, 255, .8)',
                    color: 'rgb(0, 0, 0)',
                  },
                  character: {
                    translations: {
                      en: 'Strange, very strange...',
                    },
                  },
                  drop: true,
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
              src: VirusesTableFront,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 150,
            height: 100,
            zIndex: 1,
          },
        },
        {
          type: 'nav',
          route: 'Tree',
          id: 'tree-navigation',
          element: {
            type: 'image',
            image: {
              src: Virus2Image,
            },
          },
          position: {
            x: 95,
            y: 92,
            width: 38,
            height: 38,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
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
          type: 'dialog',
          id: 'virus3-dialog',
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
              characterElement: {
                type: 'image',
                image: {
                  src: Virus3Front,
                },
                bg: 'rgba(255, 255, 255, .8)',
                color: 'rgb(0, 0, 0)',
              },
              character: {
                translations: {
                  en:
                    'Did you know that teeth is the most important thing to be a real deadly super-duper killer virus?',
                },
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
                  heroElement: {
                    type: 'image',
                    image: {
                      src: HeroAvatar,
                    },
                    bg: 'rgba(131, 146, 130, .8)',
                    color: 'rgb(255, 255, 255)',
                  },
                  hero: {
                    translations: {
                      en: "No, I didn't know",
                    },
                  },
                  characterElement: {
                    type: 'image',
                    image: {
                      src: Virus3Front,
                    },
                    bg: 'rgba(255, 255, 255, .8)',
                    color: 'rgb(0, 0, 0)',
                  },
                  character: {
                    translations: {
                      en: 'You have no brains then, hah!',
                    },
                  },
                  drop: true,
                },
              ],
            },
          },
        },
        {
          type: 'collectable',
          id: 'picture-part2',
          element: {
            type: 'image',
            image: {
              src: ImagePart2,
              inventoryImage: PlagueImagePart2Inventory,
            },
          },
          position: {
            x: 200,
            y: 110,
            width: 15,
            height: 15,
            zIndex: 4,
          },
          logical: {
            countOfUse: 1,
          },
          sound: Paper,
        },
        {
          type: 'blank',
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
            zIndex: 1,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
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
        {
          type: 'decorative',
          id: 'gum-width-key',
          element: {
            type: 'image',
            image: {
              src: GumWithKey,
            },
          },
          position: {
            x: 90,
            y: 155,
            width: 20,
            height: 20,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['gum-width-key'],
          },
          sound: GumFalling,
        },
        {
          type: 'collectable',
          id: 'safe-green-key',
          element: {
            type: 'image',
            image: {
              src: GumWithKey,
              inventoryImage: GreenKeyInventory,
            },
          },
          position: {
            x: 90,
            y: 180,
            width: 20,
            height: 20,
          },
          logical: {
            showOnResolved: ['gum-width-key'],
            resolveOnCollect: ['key-was-collected'],
            countOfUse: 1,
          },
          sound: KeysCollect,
        },
        {
          type: 'decorative',
          id: 'pink-gum',
          element: {
            type: 'image',
            image: {
              src: Gum,
            },
          },
          position: {
            x: 90,
            y: 180,
            width: 20,
            height: 20,
          },
          logical: {
            showOnResolved: ['key-was-collected'],
          },
        },
      ],
    },
  },
  {
    name: 'Level2-virus3',
    route: 'Level2-virus3',
    bg: Level2Virus2Bg,
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
          type: 'receiver',
          id: 'level2-virus3',
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
            expectedValue: ['level2-knife'],
          },
          sound: Cut,
        },
        {
          type: 'receiver',
          id: 'Virus3Blood',
          element: {
            type: 'image',
            image: {
              src: Virus3Blood,
            },
          },
          position: {
            x: 100,
            y: 140,
            width: 50,
            height: 50,
            zIndex: 3,
          },
          logical: {
            expectedValue: ['blood-container'],
            showOnResolved: ['level2-virus3'],
            hideOnResolved: ['Virus3Blood'],
          },
          sound: WaterFilling,
        },
        {
          type: 'collectable',
          id: 'tooth',
          element: {
            type: 'image',
            image: {
              src: Tooth,
              inventoryImage: ToothInventory,
            },
          },
          position: {
            x: 130,
            y: 170,
            width: 8,
            height: 8,
            zIndex: 4,
          },
          logical: {
            showOnResolved: ['level2-virus3'],
            resolveOnCollect: ['tooth-should-hide'],
            countOfUse: 1,
          },
          sound: Correct,
        },
        {
          type: 'collectable',
          id: 'blood-container-full',
          element: {
            type: 'image',
            image: {
              src: BloodContainerFull,
            },
          },
          position: {
            x: 120,
            y: 170,
            width: 20,
            height: 25,
          },
          logical: {
            countOfUse: 1,
            showOnResolved: ['Virus3Blood'],
            resolveOnCollect: ['blood-should-hide'],
          },
          sound: GlassRing,
        },
        {
          type: 'blank',
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
            zIndex: 1,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
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
            y: 185,
            height: 15,
            width: 300,
          },
        },
        {
          type: 'decorative',
          id: 'gum-width-key',
          element: {
            type: 'image',
            image: {
              src: GumWithKey,
            },
          },
          position: {
            x: 90,
            y: 155,
            width: 20,
            height: 20,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['gum-width-key'],
          },
        },
        {
          type: 'collectable',
          id: 'safe-green-key',
          element: {
            type: 'image',
            image: {
              src: GumWithKey,
              inventoryImage: GreenKeyInventory,
            },
          },
          position: {
            x: 90,
            y: 180,
            width: 20,
            height: 20,
          },
          logical: {
            showOnResolved: ['gum-width-key'],
            resolveOnCollect: ['key-was-collected'],
            countOfUse: 1,
          },
          sound: KeysCollect,
        },
        {
          type: 'decorative',
          id: 'pink-gum',
          element: {
            type: 'image',
            image: {
              src: Gum,
            },
          },
          position: {
            x: 90,
            y: 180,
            width: 20,
            height: 20,
          },
          logical: {
            showOnResolved: ['key-was-collected'],
          },
        },
      ],
    },
  },
  {
    name: 'Level2-virus2',
    route: 'Level2-virus2',
    bg: Level2Virus2Bg,
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
          type: 'dialog',
          id: 'level2-virus2-dialog',
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
              characterElement: {
                type: 'image',
                image: {
                  src: Virus2Front,
                },
                bg: 'rgba(255, 255, 255, .8)',
                color: 'rgb(0, 0, 0)',
              },
              character: {
                translations: {
                  en:
                    "They say, that trees are like lungs... I'm looking at this photo and can't understand how. Can you take a look?",
                },
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
                  heroElement: {
                    type: 'image',
                    image: {
                      src: HeroAvatar,
                    },
                    bg: 'rgba(131, 146, 130, .8)',
                    color: 'rgb(255, 255, 255)',
                  },
                  hero: {
                    translations: {
                      en:
                        "Well, i may take a look. But that's a strange assumption",
                    },
                  },
                  characterElement: {
                    type: 'image',
                    image: {
                      src: Virus2Front,
                    },
                    bg: 'rgba(255, 255, 255, .8)',
                    color: 'rgb(0, 0, 0)',
                  },
                  character: {
                    translations: {
                      en: 'Strange, very strange...',
                    },
                  },
                  drop: true,
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
              src: VirusesTableFront,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 150,
            height: 100,
            zIndex: 1,
          },
        },
        {
          type: 'nav',
          id: 'tree-navigation',
          route: 'Level2-tree',
          element: {
            type: 'image',
            image: {
              src: Virus2Image,
            },
          },
          position: {
            x: 95,
            y: 92,
            width: 38,
            height: 38,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
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
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
  {
    name: 'Tree',
    route: 'Tree',
    bg: VirusesBg,
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
            zIndex: 2,
          },
        },
        {
          type: 'nav',
          id: 'back-from-tree-image',
          route: 'Virus2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 10,
            y: 185,
            width: 280,
            height: 15,
            zIndex: 2,
          },
        },
        {
          type: 'nav',
          id: 'tree-zoomed-navigation',
          route: 'Tree-zoomed',
          element: {
            type: 'image',
            image: {
              src: TreeImage,
            },
          },
          position: {
            x: 10,
            y: 5,
            height: 190,
            width: 280,
          },
        },
      ],
    },
  },
  {
    name: 'Tree-zoomed',
    route: 'Tree-zoomed',
    bg: TreeImageZoomed,
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
          id: 'back-from-tree-zoomed',
          route: 'Tree',
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
      ],
    },
  },
  {
    name: 'Level2-tree',
    route: 'Level2-tree',
    bg: TreeBg,
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
            zIndex: 2,
          },
        },
        {
          type: 'nav',
          id: 'back-from-level2-tree-image',
          route: 'Level2-virus2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 10,
            y: 185,
            width: 280,
            height: 15,
            zIndex: 2,
          },
        },
        {
          type: 'nav',
          id: 'level2-tree-zoomed-navigation',
          route: 'Level2-tree-zoomed',
          element: {
            type: 'image',
            image: {
              src: TreeImage,
            },
          },
          position: {
            x: 10,
            y: 5,
            height: 190,
            width: 280,
          },
        },
      ],
    },
  },
  {
    name: 'Level2-tree-zoomed',
    route: 'Level2-tree-zoomed',
    bg: TreeImageZoomed,
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
          id: 'back-from-level2-tree-zoomed',
          route: 'Level2-tree',
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
      ],
    },
  },
  {
    name: 'Lung2',
    route: 'Lung2',
    bg: Level2Virus2Bg,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          id: 'sequence1-default-image',
          element: {
            type: 'image',
            image: {
              src: LungSequence,
            },
          },
          position: {
            x: 60,
            y: 9,
            width: 165,
            height: 180,
          },
          logical: {
            itemShouldHide: false,
          },
        },
        {
          type: 'blank',
          id: 'sequence1-right-way-image',
          element: {
            type: 'image',
            image: {
              src: LungSequenceRight,
            },
          },
          position: {
            x: 60,
            y: 9,
            width: 165,
            height: 180,
          },
          logical: {
            itemShouldHide: true,
          },
        },
        {
          type: 'sequence',
          id: 'sequence1_1',
          group: 'sequence1',
          main: true,
          defaultImage: 'sequence1-default-image',
          rightImage: 'sequence1-right-way-image',
          element: {
            type: 'trigger',
          },
          position: {
            x: 85,
            y: 50,
            width: 30,
            height: 25,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
            setProgressOnResolved: 'last-crown',
            scenario: [
              'sequence1_5',
              'sequence1_2',
              'sequence1_1',
              'sequence1_7',
              'sequence1_4',
              'sequence1_6',
              'sequence1_8',
              'sequence1_3',
            ],
          },
          sound: LungsBranches,
        },
        {
          type: 'sequence',
          id: 'sequence1_2',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 75,
            y: 75,
            width: 35,
            height: 30,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: LungsBranches,
        },
        {
          type: 'sequence',
          id: 'sequence1_3',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 70,
            y: 115,
            width: 30,
            height: 37,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: Correct,
        },
        {
          type: 'sequence',
          id: 'sequence1_4',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 105,
            y: 120,
            width: 20,
            height: 25,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: LungsBranches,
        },
        {
          type: 'sequence',
          id: 'sequence1_5',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 175,
            y: 50,
            width: 30,
            height: 30,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: LungsBranches,
        },
        {
          type: 'sequence',
          id: 'sequence1_6',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 185,
            y: 82,
            width: 25,
            height: 25,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: LungsBranches,
        },
        {
          type: 'sequence',
          id: 'sequence1_7',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 190,
            y: 115,
            width: 30,
            height: 37,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: LungsBranches,
        },
        {
          type: 'sequence',
          id: 'sequence1_8',
          group: 'sequence1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 165,
            y: 122,
            width: 20,
            height: 25,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['sequence1'],
          },
          sound: LungsBranches,
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: LungPoint,
            },
          },
          position: {
            x: 100,
            y: 45,
            width: 6,
            height: 6,
          },
          logical: {
            showOnResolved: ['sequence1'],
          },
        },
        {
          type: 'nav',
          route: 'Lung4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 95,
            y: 40,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['sequence1'],
          },
        },
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
          route: 'Level2-wall3',
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
    name: 'Lung4',
    route: 'Lung4',
    bg: Lung4,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Lung5',
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
    name: 'Lung5',
    route: 'Lung5',
    bg: Lung5,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Lung6',
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
    name: 'Lung6',
    route: 'Lung6',
    bg: Lung6,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Lung7',
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
    name: 'Lung7',
    route: 'Lung7',
    bg: Lung7,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Lung8',
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
    name: 'Lung8',
    route: 'Lung8',
    bg: Lung8,
    objects: {
      itemsMap: [
        {
          type: 'collectable',
          id: 'crown-virus-part3',
          element: {
            type: 'image',
            image: {
              src: Lung8Virus,
              inventoryImage: VirusRewardInventory,
            },
          },
          position: {
            x: 40,
            y: 60,
            width: 10,
            height: 10,
            zIndex: 1,
          },
          logical: {
            setProgressOnResolved: 'choose-right-face',
            resolveOnCollect: ['lung8-route-must-be-showen'],
            countOfUse: 1,
          },
          sound: Correct,
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: Lung8VirusCover,
            },
          },
          position: {
            x: 42,
            y: 50,
            width: 2,
            height: 12,
          },
        },
        {
          type: 'nav',
          route: 'Level3-1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
          logical: {
            showOnResolved: ['lung8-route-must-be-showen'],
          },
        },
      ],
    },
  },
  {
    name: 'Mirror3',
    route: 'Mirror3',
    bg: Լevel3MirrorBg,
    objects: {
      itemsMap: [
        {
          type: 'receiver',
          id: 'mirror',
          element: {
            type: 'image',
            image: {
              src: MirrorSceneMirror,
            },
          },
          position: {
            x: 90,
            y: 15,
            width: 120,
            height: 170,
          },
          logical: {
            expectedValue: [
              'crown-virus-part1',
              'crown-virus-part2',
              'crown-virus-part3',
              'crown-virus-part4',
              'crown-virus-part5',
              'tooth',
            ],
          },
          sound: Correct,
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart1,
            },
          },
          position: {
            x: 120,
            y: 48,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part1'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart2,
            },
          },
          position: {
            x: 130,
            y: 42,
            width: 16,
            height: 16,
            zIndex: 2,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part2'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart3,
            },
          },
          position: {
            x: 144,
            y: 36,
            width: 18,
            height: 18,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part3'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart4,
            },
          },
          position: {
            x: 160,
            y: 44,
            width: 17,
            height: 17,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part4'],
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart5,
            },
          },
          position: {
            x: 171,
            y: 50,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['mirror-crown-virus-part5'],
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
            x: 147,
            y: 159,
            width: 8,
            height: 8,
          },
          logical: {
            showOnResolved: ['mirror-tooth'],
          },
        },
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
          route: 'Level3-1',
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
    name: 'Level3-1',
    route: 'Level3-1',
    bg: Level3_1Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-2',
          element: {
            type: 'image',
            image: {
              src: Level3_1Catapult,
            },
          },
          position: {
            x: 30,
            y: 70,
            width: 100,
            height: 90,
          },
          logical: {
            activateOnResolved: [
              'mirror-crown-virus-part1',
              'mirror-crown-virus-part2',
              'mirror-crown-virus-part3',
              'mirror-crown-virus-part4',
              'mirror-crown-virus-part5',
              'mirror-tooth',
            ],
          },
        },
        {
          type: 'nav',
          route: 'Mirror3',
          element: {
            type: 'image',
            image: {
              src: Level3_1Mirror,
            },
          },
          position: {
            x: 140,
            y: 40,
            width: 40,
            height: 60,
          },
        },
      ],
    },
  },
  {
    name: 'Level3-2',
    route: 'Level3-2',
    bg: Level3_2,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Aim1',
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
    name: 'Aim1',
    route: 'Aim1',
    bg: AimBg,
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
          type: 'nav',
          route: 'Aim4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Aim2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 270,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Aim1',
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
    name: 'Aim1',
    route: 'Aim1',
    bg: AimBg,
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
          type: 'nav',
          route: 'Aim4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Aim2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 270,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: Aim1,
            },
          },
          position: {
            x: 100,
            y: 45,
            width: 100,
            height: 105,
          },
        },
      ],
    },
  },
  {
    name: 'Aim2',
    route: 'Aim2',
    bg: AimBg,
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
          type: 'nav',
          route: 'Aim1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Aim3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 270,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: Aim2,
            },
          },
          position: {
            x: 100,
            y: 45,
            width: 100,
            height: 105,
          },
        },
      ],
    },
  },
  {
    name: 'Aim3',
    route: 'Aim3',
    bg: AimBg,
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
          type: 'nav',
          route: 'Aim2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Aim4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 270,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: Aim3,
            },
          },
          position: {
            x: 100,
            y: 45,
            width: 100,
            height: 105,
          },
        },
      ],
    },
  },
  {
    name: 'Aim4',
    route: 'Aim4',
    bg: AimBg,
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
          type: 'nav',
          route: 'Aim3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Aim1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 270,
            y: 0,
            width: 30,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: 'Level3-3',
          element: {
            type: 'image',
            image: {
              src: Aim4,
            },
          },
          position: {
            x: 100,
            y: 45,
            width: 100,
            height: 105,
          },
        },
      ],
    },
  },
  {
    name: 'Level3-3',
    route: 'Level3-3',
    bg: Level3_3,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-4',
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
    name: 'Level3-4',
    route: 'Level3-4',
    bg: Level3_4,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-5',
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
    name: 'Level3-5',
    route: 'Level3-5',
    bg: Level3_5,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-6',
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
    name: 'Level3-6',
    route: 'Level3-6',
    bg: Level3_6,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-7',
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
    name: 'Level3-7',
    route: 'Level3-7',
    bg: Level3_7,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-8',
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
    name: 'Level3-8',
    route: 'Level3-8',
    bg: Level3_8,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-9',
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
    name: 'Level3-9',
    route: 'Level3-9',
    bg: Level3_9,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Level3-10',
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
];

const INITIAL_SCREEN = 'Farm1';

export { SCENES, INITIAL_SCREEN };
