import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  AsyncStorage
} from "react-native";
import Modal from "react-native-modal";
import Draggable from "react-native-draggable";
import { FontAwesome } from "@expo/vector-icons";
import { pointX, pointY } from "../helpers/StyleGenerator";

import { Element } from "../helpers/ElementGenerator";

const { width, height } = Dimensions.get("window");

const Inventory = ({
  collectedItems,
  open,
  onPress,
  modalIsOpen,
  changeModalVisibility,
  getCollectedItems,
  receive,
  objects
}) => {
  const handleInvetoryItemPress = async itemId => {
    await AsyncStorage.setItem("selectedItem", itemId);
  };
  const dropItemFromInventory = async () => {
    const itemId = await AsyncStorage.getItem("selectedItem");
    if (itemId) {
      const indexRow = collectedItems.find(el => el.id === itemId);
      if (indexRow) {
        const index = collectedItems.indexOf(indexRow);
        if (index > -1) {
          collectedItems.splice(index, 1);
          await AsyncStorage.setItem(
            "inventory",
            JSON.stringify(collectedItems)
          );
          await getCollectedItems();
        }
      }
    }
  };

  const onDragRelease = (_, g) => {
    const moveX = g.moveX / pointX;
    const moveY = g.moveY / pointY;
    const receiver = objects.itemsMap.find(
      item => item.expectedValue === "collectable1"
    );
    if (
      moveX > receiver.x &&
      moveX < receiver.x + receiver.width &&
      moveY > receiver.y &&
      moveY < receiver.y + receiver.height
    ) {
      receive("collectable1");
    }
  };

  const onDrag = item => {
    AsyncStorage.setItem("selectedItem", item.id);
  };

  if (open) {
    return (
      <View style={styles.inventoryOpen} onPress>
        <View>
          {collectedItems.map(item => (
            <Draggable
              onDragRelease={onDragRelease}
              shouldReverse={true}
              onDrag={() => onDrag(item)}
            >
              <TouchableOpacity
                style={styles.inventoryItem}
                key={item.id}
                onPress={() => handleInvetoryItemPress(item.id)}
              >
                <Element item={item} />
              </TouchableOpacity>
            </Draggable>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => onPress()}
          style={styles.inventoryCloseIcon}
        >
          <FontAwesome name="chevron-right" size={30} color="#E4CDBA" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.inventoryClosed} onPress={() => onPress()}>
      <FontAwesome name="briefcase" size={20} color="#664422" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inventoryOpen: {
    position: "absolute",
    zIndex: 999,
    elevation: 1,
    backgroundColor: "#FFF1E6",
    top: 0,
    right: 0,
    width: 60,
    borderLeftColor: "#E4CDBA",
    borderLeftWidth: 5,
    height,
    justifyContent: "space-between"
  },
  inventoryItem: {
    marginTop: 20,
    width: 60,
    height: 60,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  inventoryCloseIcon: {
    position: "absolute",
    top: height / 2 - 10,
    left: -4
  },
  inventoryClosed: {
    position: "absolute",
    top: 40,
    right: 20
  }
});

export default Inventory;
