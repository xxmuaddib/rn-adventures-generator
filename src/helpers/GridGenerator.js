import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Draggable from "react-native-draggable";
import { generateStyle } from "./StyleGenerator";
import { Element } from "./ElementGenerator";
import { ITEMS } from "../constants/items";
import { ELEMENTS } from "../constants/elements";

const { width, height } = Dimensions.get("window");
const generateObjectGrid = ({
  objects,
  collectedItems,
  onPress,
  collect,
  toggleMultiple,
  receive,
  sequence,
  showModal,
  onDragRelease,
  showDialog,
  state
}) => {
  return (
    <View style={{ width, height }}>
      {objects.navMap.map(item => {
        const isResolved =
          !item.showOnResolved ||
          !item.showOnResolved.length ||
          item.showOnResolved.some(item => state.resolved.includes(item));
        const hideResolved =
          !item.hideOnResolved || !item.hideOnResolved.length
            ? false
            : item.hideOnResolved.every(item => state.resolved.includes(item));
        if (isResolved && !hideResolved) {
          return (
            <TouchableOpacity
              key={item.route}
              style={generateStyle(styles.itemStyle, {
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height
              })}
              onPress={() => onPress(item.route)}
            >
              <Element item={item} />
            </TouchableOpacity>
          );
        }
      })}
      {objects.itemsMap.map(item => {
        const isResolved =
          !item.showOnResolved ||
          !item.showOnResolved.length ||
          item.showOnResolved.some(item => state.resolved.includes(item));
        const hideResolved =
          !item.hideOnResolved || !item.hideOnResolved.length
            ? false
            : item.hideOnResolved.every(item => state.resolved.includes(item));
        const collectableShouldHide =
          collectedItems.findIndex(
            element => item.type === ITEMS.COLLECTABLE && element.id === item.id
          ) !== -1;
        return (
          <View key={item.id}>
            {item.type === ITEMS.SEQUENCE && isResolved && !hideResolved && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height
                })}
                onPress={() => sequence(item)}
              >
                <Text style={{ color: "green" }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            {item.type === ITEMS.RECEIVER && isResolved && !hideResolved && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height
                })}
                onPress={() => receive(item.expectedValue)}
              >
                <Text style={{ color: "red" }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            {item.type === ITEMS.COLLECTABLE &&
              !collectableShouldHide &&
              isResolved && (
                <TouchableOpacity
                  style={generateStyle(styles.itemStyle, {
                    x: item.x,
                    y: item.y,
                    width: item.width,
                    height: item.height
                  })}
                  onPress={() => collect(item)}
                >
                  <Element item={item} />
                </TouchableOpacity>
              )}
            {item.multiple && isResolved && !hideResolved && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height
                })}
                onPress={() => toggleMultiple(item)}
              >
                <Element item={item} type={ELEMENTS.MULTIPLE} />
              </TouchableOpacity>
            )}
            {item.type === ITEMS.PAPER && isResolved && !hideResolved && (
              <>
                <TouchableOpacity
                  style={generateStyle(styles.itemStyle, {
                    x: item.x,
                    y: item.y,
                    width: item.width,
                    height: item.height
                  })}
                  onPress={() => showModal(item)}
                >
                  <Element item={item} />
                </TouchableOpacity>
              </>
            )}
            {item.type === ITEMS.DRAGGABLE && isResolved && !hideResolved && (
              <Draggable x={item.x} y={item.y} onDragRelease={onDragRelease}>
                <Element item={item} />
              </Draggable>
            )}
            {item.type === ITEMS.DIALOG && isResolved && !hideResolved && (
              <TouchableOpacity
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height
                })}
                onPress={() => showDialog(item.dialogProperties)}
              >
                <Element item={item} />
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
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  }
});

export { generateObjectGrid };
