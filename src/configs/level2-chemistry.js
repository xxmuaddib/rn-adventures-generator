import ChemistryBg from '../assets/images/chemistry-bg.png';
import EmptyChemicalContainer from '../assets/images/empty-chemical-container.png';
import ChemicalContainer from '../assets/images/chemical-container.png';
import Candle from '../assets/images/candle.png';
import CandleFired from '../assets/images/candle-fired.png';
import EmptyChemicalContainers from '../assets/images/empty-chemical-containers.png';

export const CHEMISTRY_SCENE = {
  name: 'Chemistry',
  route: 'Chemistry',
  bg: ChemistryBg,
  objects: {
    itemsMap: [
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: EmptyChemicalContainers,
          },
        },
        position: {
          x: 65,
          y: 11,
          width: 180,
          height: 130,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: EmptyChemicalContainer,
          },
        },
        position: {
          x: 85,
          y: 40,
          width: 25,
          height: 45,
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
          x: 91,
          y: 95,
          width: 15,
          height: 15,
        },
      },
    ],
  },
};
