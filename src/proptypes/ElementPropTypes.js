import PropTypes from 'prop-types';
import { ELEMENT_VARIANTS } from '../constants/elements';

export const ElementAnimationPropType = PropTypes.shape({
  src: PropTypes.node.isRequired,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
});

export const ImageSource = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string,
    headers: PropTypes.objectOf(PropTypes.string),
  }),
  PropTypes.number,
  PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
  ),
]);

export const ElementImagePropType = PropTypes.shape({
  src: ImageSource,
});

export const ElementPropType = PropTypes.shape({
  type: PropTypes.oneOf(Object.values(ELEMENT_VARIANTS)).isRequired,
  name: PropTypes.string,
  animation: ElementAnimationPropType,
  image: ElementImagePropType,
});
