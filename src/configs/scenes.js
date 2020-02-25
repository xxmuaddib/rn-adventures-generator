import RoomWithClosedDoor from "../assets/images/Room with closed door.png";

const SCENES = [
  {
    name: "Main",
    route: "Main",
    bg: RoomWithClosedDoor,
    objects: {
      navMap: [],
      itemsMap: [],
      dialogButtonsMap: []
    }
  }
];

const INITIAL_SCREEN = "Main";

export { SCENES, INITIAL_SCREEN };
