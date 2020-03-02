import PropTypes from 'prop-types';
import { ElementPropType } from './ElementPropTypes';
import { ITEMS } from '../constants/items';

export const PositionPropType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
});

export const DialogPropType = PropTypes.shape({
  s: PropTypes.string,
  a: PropTypes.string,
  dialog: DialogPropType,
  showOnResolved: PropTypes.arrayOf(PropTypes.string),
  hideOnResolved: PropTypes.arrayOf(PropTypes.string),
  resolve: PropTypes.string,
});

export const LogicalPropType = PropTypes.shape({
  showOnResolved: PropTypes.arrayOf(PropTypes.string),
  hideOnResolved: PropTypes.arrayOf(PropTypes.string),
  dialogProperties: DialogPropType,
  expectedValue: PropTypes.string,
});

export const ObjectPropTypes = PropTypes.shape({
  type: PropTypes.oneOf(Object.values(ITEMS)).isRequired,
  id: PropTypes.string.isRequired,
  element: ElementPropType,
  position: PositionPropType,
  logical: LogicalPropType,
});

export const NavItemPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
});

export const ObjectsPropTypes = PropTypes.shape({
  navMap: PropTypes.arrayOf(NavItemPropType).isRequired,
  itemsMap: PropTypes.arrayOf(ObjectPropTypes).isRequired,
});
