import PropTypes from 'prop-types';
import {
  ElementPropType,
  ImageSource,
  SoundPropType,
} from './ElementPropTypes';
import { ITEMS } from '../constants/items';

export const PositionPropType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  zIndex: PropTypes.number,
});

export const DialogPropType = PropTypes.shape({
  s: PropTypes.string,
  a: PropTypes.string,
  dialog: DialogPropType,
  showOnResolved: PropTypes.arrayOf(PropTypes.string),
  hideOnResolved: PropTypes.arrayOf(PropTypes.string),
  resolve: PropTypes.string,
});

export const PaperPropType = PropTypes.shape({
  bg: ImageSource,
  text: PropTypes.string,
  bgSound: SoundPropType,
});

export const LogicalPropType = PropTypes.shape({
  showOnResolved: PropTypes.arrayOf(PropTypes.string),
  hideOnResolved: PropTypes.arrayOf(PropTypes.string),
  deactivateOnResolved: PropTypes.arrayOf(PropTypes.string),
  activateOnResolved: PropTypes.arrayOf(PropTypes.string),
  dialogProperties: DialogPropType,
  expectedValue: PropTypes.string,
  scenario: PropTypes.arrayOf(PropTypes.string),
});

export const ObjectPropTypes = PropTypes.shape({
  type: PropTypes.oneOf(Object.values(ITEMS)).isRequired,
  id: PropTypes.string.isRequired,
  group: PropTypes.string,
  element: ElementPropType,
  position: PositionPropType,
  logical: LogicalPropType,
  sound: SoundPropType,
});

export const NavItemPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
});

export const ObjectsPropTypes = PropTypes.shape({
  itemsMap: PropTypes.arrayOf(ObjectPropTypes).isRequired,
});
