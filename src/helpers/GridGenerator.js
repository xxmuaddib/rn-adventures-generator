import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { generateStyle } from './StyleGenerator';
import { generateElement } from './ElementGenerator';

const { width, height } = Dimensions.get('window');

const generateObjectGrid = ({
  objects,
  collectedItems,
  onPress,
  collect,
  toggleMultiple,
  recieve,
  sequence,
}) => {
  return (
    <View style={{ width, height }}>
      {objects.navMap.map(item => (
        <TouchableOpacity
          key={item.route}
          style={generateStyle(styles.itemStyle, {
            x: item.x,
            y: item.y,
            width: item.width,
            height: item.height,
          })}
          onPress={() => onPress(item.route)}
        >
          {generateElement({ item })}
        </TouchableOpacity>
      ))}
      {objects.itemsMap.map(item => {
        const collectableShouldHide = collectedItems.findIndex(element => item.type === 'collectable' && element.id === item.id) !== -1;
        return (
          <View key={item.id}>
            {item.type === 'sequence' && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => sequence(item)}
              >
                <Text style={{ color: 'green' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            {item.type === 'reciever' && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => recieve(item.expectedValue)}
              >
                <Text style={{ color: 'red' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            {item.type === 'collectable' && !collectableShouldHide && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => collect(item)}
              >
                {generateElement({ item })}
              </TouchableOpacity>
            )}
            {item.multiple && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => toggleMultiple(item)}
              >
                {generateElement({ item, type: 'multiple' })}
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { generateObjectGrid };
