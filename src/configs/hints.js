import PuzzlePictureHint from '../assets/images/puzzle-picture-hint.png';
import BlackboardHint from '../assets/images/blackboard-hint.png';
import SkeletonCollectHint from '../assets/images/skeleton-collect-hint.png';
import ChemicalHint from '../assets/images/chemical-hint.png';
import LungsHint from '../assets/images/lungs-hint.png';
import ChooseRightFaceHint from '../assets/images/choose-right-face-hint.png';
import LastCrownHint from '../assets/images/last-crown-hint.png';

export const HINTS = [
  {
    progress: '',
    text: 'I think we should speak with everybody and see what they say',
  },
  {
    progress: 'plaguePictureShouldBeSolved',
    image: PuzzlePictureHint,
  },
  {
    progress: 'blackboard',
    image: BlackboardHint,
  },
  {
    progress: 'skeleton',
    image: SkeletonCollectHint,
  },
  {
    progress: 'chemical',
    image: ChemicalHint,
  },
  {
    progress: 'lungs',
    image: LungsHint,
  },
  {
    progress: 'choose-right-face',
    image: ChooseRightFaceHint,
  },
  {
    progress: 'last-crown',
    image: LastCrownHint,
  },
];
