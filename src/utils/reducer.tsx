import { StateI } from "./Interfaces";

export const initialState = {
  choices: [
    { choiceId: 0, name: "Lasasgne", weightings: [50, 50, 50] },
    { choiceId: 1, name: "Chicken Wings", weightings: [50, 50, 50] },
    { choiceId: 2, name: "Salad", weightings: [50, 50, 50] },
  ],
  attributes: [
    { attributeId: 0, name: "Taste", weighting: 1 },
    { attributeId: 1, name: "Value for Money", weighting: 1 },
    { attributeId: 2, name: "Healthiness", weighting: 1 },
  ],
};

export function reducer(state: StateI, action: any) {
  switch (action.type) {
    case "update_attribute_weighting": {
      console.log(state);
      const newAttributes = state.attributes.map((attribute) =>
        attribute.attributeId === action.attributeId
          ? { ...attribute, weighting: action.weighting }
          : attribute
      );
      return {
        choices: state.choices,
        attributes: newAttributes,
      };
    }
    case "update_choice_weighting": {
      const newChoices = state.choices.map((choice) => {
        if (choice.choiceId === action.choiceId) {
          const newWeightings = choice.weightings;
          newWeightings[action.attributeId] = action.weighting;
          return {
            ...choice,
            weightings: newWeightings,
          };
        }
        return choice;
      });
      return { choices: newChoices, attributes: state.attributes };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
