import findScores from "../utils/findScores";

describe("find scores function", () => {
  test("it should give the correct scores array when there are 3 choices and 3 attributes", () => {
    const input = {
      choices: [
        {
          choiceId: 0,
          choiceKey: 0,
          name: "Lasasgne",
          weightings: [80, 50, 10],
        },
        {
          choiceId: 1,
          choiceKey: 1,
          name: "Chicken Wings",
          weightings: [0, 20, 15],
        },
        { choiceId: 2, choiceKey: 2, name: "Salad", weightings: [70, 63, 99] },
      ],
      attributes: [
        { attributeId: 0, attributeKey: 0, name: "Taste", weighting: 1 },
        {
          attributeId: 1,
          attributeKey: 1,
          name: "Value for Money",
          weighting: 0.5,
        },
        {
          attributeId: 2,
          attributeKey: 2,
          name: "Healthiness",
          weighting: 0.9,
        },
      ],
      nextChoiceKey: 4,
      nextAttributeKey: 3,
    };
    const output = [114, 23.5, 190.6];

    expect(findScores(input)).toEqual(output);
  });
});
