import { StateI } from "./Interfaces";

export const initialState = {
  choices: [
    { choiceId: 0, name: "Lasasgne", weightings: [50, 50, 50] },
    { choiceId: 1, name: "Chicken Wings", weightings: [50, 50, 50] },
    { choiceId: 2, name: "Salad", weightings: [50, 50, 50] },
    { choiceId: 3, name: "Panini", weightings: [50, 50, 50] },
  ],
  attributes: [
    { attributeId: 0, name: "Taste", weighting: 0.5 },
    { attributeId: 1, name: "Value for Money", weighting: 0.5 },
    { attributeId: 2, name: "Healthiness", weighting: 0.5 },
  ],
};

export function reducer(state: StateI, action: any) {
  switch (action.type) {
    case "update_attribute_weighting": {
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
    case "update_choice_name": {
      const newChoices = state.choices.map((choice) =>
        choice.choiceId === action.choiceId
          ? { ...choice, name: action.name }
          : choice
      );
      return {
        choices: newChoices,
        attributes: state.attributes,
      };
    }
    case "update_attribute_name": {
      const newAttributes = state.attributes.map((attribute) =>
        attribute.attributeId === action.attributeId
          ? { ...attribute, name: action.name }
          : attribute
      );
      return {
        choices: state.choices,
        attributes: newAttributes,
      };
    }
    case "delete_choice": {
      console.log(state.choices);
      const newChoices = state.choices.filter(
        (choice) => choice.choiceId !== action.choiceId
      );
      console.log(newChoices);
      const choicesWithCorrectIds = newChoices.map((choice, index) => {
        choice.choiceId = index;
        return choice;
      });
      console.log(choicesWithCorrectIds);
      return {
        choices: choicesWithCorrectIds,
        attributes: state.attributes,
      };
    }
    case "delete_attribute": {
      const newAttributes = state.attributes.filter(
        (attribute) => attribute.attributeId !== action.attributeId
      );
      return {
        choices: state.choices,
        attributes: newAttributes,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
