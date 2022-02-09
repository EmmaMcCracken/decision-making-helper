export {};
const exampleInput = {
  choices: [
    { choiceId: 0, name: "Lasasgne", weightings: [80, 50, 10] },
    { choiceId: 1, name: "Chicken Wings", weightings: [0, 20, 15] },
    { choiceId: 2, name: "Salad", weightings: [70, 63, 99] },
  ],
  attributes: [
    { attributeId: 0, name: "Taste", weighting: 1 },
    { attributeId: 1, name: "Value for Money", weighting: 0.5 },
    { attributeId: 2, name: "Healthiness", weighting: 0.9 },
  ],
};

//   expected output: [ 114, 23.5, 190.6 ]
