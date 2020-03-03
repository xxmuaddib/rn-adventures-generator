import { Platform } from 'react-native';

export const PlatformSpecificMeasurement = unit =>
  Platform.OS === 'ios' ? `${unit}px` : `${unit + 20}px`;
