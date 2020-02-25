import { watermelon } from "../assets/animations";

const SCENES = [
  {
    name: "Main",
    route: "Main",
    bg:
      "https://static1.squarespace.com/static/58bea83d59cc6866d228a41b/58ca658b37c5813452b104aa/58ca65a0bebafbce64d25218/1501665865370/view+01.jpg?format=2500w",
    objects: {
      navMap: [
        {
          x: 70,
          y: 30,
          width: 80,
          height: 40,
          route: "Next",
          name: "Next",
          //showWhen: 'collectable1',
          element: "text",
          showOnResolved: ["sequence1", "group1", "receiver"]
        }
      ],
      itemsMap: [
        {
          type: "collectable",
          x: 200,
          y: 170,
          width: 20,
          height: 20,
          name: "C",
          id: "collectable1",
          element: "image",
          imgSrc: "http://cdn.onlinewebfonts.com/svg/img_327474.png",
          showOnResolved: ["sequence1"]
        },
        {
          type: "sequence",
          x: 150,
          y: 50,
          width: 20,
          height: 20,
          name: "D",
          group: "sequence1",
          id: "sequence1_1",
          hideOnResolved: ["sequence1"]
        },
        {
          type: "sequence",
          x: 150,
          y: 70,
          width: 20,
          height: 20,
          name: "A",
          group: "sequence1",
          id: "sequence1_2",
          hideOnResolved: ["sequence1"]
        },
        {
          type: "sequence",
          x: 190,
          y: 70,
          width: 20,
          height: 20,
          name: "B",
          group: "sequence1",
          id: "sequence1_3",
          hideOnResolved: ["sequence1"]
        },
        {
          type: "receiver",
          x: 150,
          y: 130,
          width: 40,
          height: 20,
          id: "receiver1",
          name: "Test receiver",
          expectedValue: "collectable1",
          showOnResolved: ["sequence1"]
        },
        {
          type: "multiple",
          x: 200,
          y: 100,
          width: 20,
          height: 20,
          showOnResolved: ["receiver"],
          hideOnResolved: ["group1"],
          multiple: [
            {
              id: "group1_1_1",
              element: "image",
              imgSrc: "http://cdn.onlinewebfonts.com/svg/img_311846.png"
            },
            {
              id: "group1_1_2",
              element: "image",
              imgSrc: "http://cdn.onlinewebfonts.com/svg/img_327474.png"
            },
            {
              id: "group1_1_3",
              element: "image",
              imgSrc:
                "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            }
          ],
          correct: "group1_1_3",
          selected: "group1_1_1",
          id: "group1_1",
          group: "group1"
        },
        {
          type: "multiple",
          x: 220,
          y: 100,
          width: 20,
          height: 20,
          showOnResolved: ["receiver"],
          hideOnResolved: ["group1"],
          multiple: [
            {
              id: "group1_2_1",
              element: "image",
              imgSrc: "http://cdn.onlinewebfonts.com/svg/img_327474.png"
            },
            {
              id: "group1_2_2",
              element: "image",
              imgSrc:
                "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            },
            {
              id: "group1_2_3",
              element: "image",
              imgSrc: "http://cdn.onlinewebfonts.com/svg/img_311846.png"
            }
          ],
          correct: "group1_2_2",
          selected: "group1_2_1",
          id: "group1_2",
          group: "group1"
        },
        {
          type: "multiple",
          x: 240,
          y: 100,
          width: 20,
          height: 20,
          showOnResolved: ["receiver"],
          hideOnResolved: ["group1"],
          multiple: [
            {
              id: "group1_3_1",
              element: "image",
              imgSrc:
                "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            },
            {
              id: "group1_3_2",
              element: "image",
              imgSrc: "http://cdn.onlinewebfonts.com/svg/img_311846.png"
            },
            {
              id: "group1_3_3",
              element: "image",
              imgSrc: "http://cdn.onlinewebfonts.com/svg/img_327474.png"
            }
          ],
          correct: "group1_3_1",
          selected: "group1_3_1",
          id: "group1_3",
          group: "group1",
          element: "text"
        },
        {
          type: "paper",
          id: "paper1",
          element: "text",
          name: "P",
          x: 20,
          y: 40,
          width: 20,
          height: 20,
          bg:
            "https://previews.123rf.com/images/alexutemov/alexutemov1604/alexutemov160400954/54830274-vintage-old-map-antique-and-retro-vintage-paper-old-map-vintage-old-map-world-navigation-art-parchme.jpg",
          text: "321321321312 dsadsadsdsa"
        },
        {
          type: "draggable",
          id: "draggable1",
          element: "animatable",
          animation: watermelon,
          x: 20,
          y: 120,
          width: 20,
          height: 20
        },
        {
          type: "dialog",
          id: "dialog1",
          element: "text",
          name: "D",
          x: 40,
          y: 70,
          width: 20,
          height: 20,
          dialogProperties: {
            dialog: [
              {
                s: "How are you?",
                a: "Fine",
                dialog: [
                  {
                    hideOnResolved: "dialog1_1",
                    s: "What is the weather today?",
                    a: "Fine",
                    dialog: [
                      {
                        s: "Why is the weather so bad?",
                        a: "The lighthouse keeper has disappeared",
                        resolve: "dialog1_1"
                      }
                    ]
                  },
                  {
                    s: "What are you doing?",
                    a: "Nothing",
                    dialog: [
                      {
                        s: "Why are you doing this?",
                        a: "Go to hell!"
                      }
                    ]
                  },
                  {
                    s: "Why?",
                    a: "I don't know",
                    dialog: [
                      {
                        s: "What is your name?",
                        a: "My name is John Smith",
                        resolve: "dialog1_2"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      describers: [
        {
          type: "sequenceDescriber",
          expectedValue: ["D", "A", "B", "A"],
          currentValue: [],
          group: "sequence1"
        }
      ],
      dialogButtonsMap: []
    }
  },
  {
    name: "Next",
    route: "Next",
    bg:
      "http://static.materialicious.com/images/house-to-see-the-sky-by-abraham-cota-paredes-o.jpg",
    objects: {
      navMap: [
        {
          x: 80,
          y: 80,
          width: 80,
          height: 40,
          route: "Main",
          element: "image",
          imgSrc: "http://cdn.onlinewebfonts.com/svg/img_327474.png"
        }
      ],
      itemsMap: [],
      dialogButtonsMap: []
    }
  }
];

const INITIAL_SCREEN = "Main";

export { SCENES, INITIAL_SCREEN };
